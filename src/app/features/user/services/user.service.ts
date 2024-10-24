import { inject, Injectable } from '@angular/core'

import { HttpClient, HttpParams } from '@angular/common/http'
import { User } from '../models/user.model'
import { firstValueFrom, Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  env = environment
  http = inject(HttpClient)

  async createUser(user: Partial<User>): Promise<User> {
    const { username, password } = user

    if (!username || !password) {
      throw new Error('Error: missing parameter/s')
    }

    const currentUser = await this.getUserByUsername(username)
    if (currentUser) {
      throw new Error('Error: username already exists')
    }
    user.id=0
    return firstValueFrom(
      this.http.post<User>(`${this.env.apiURL}/users`, user),
    )
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.env.apiURL}/users/${id}`)
  }

  async getUserByUsername(username: string): Promise<User | null> {
    const params = new HttpParams().set('username', username)
    const users: User[] = await firstValueFrom(
      this.http.get<User[]>(`${this.env.apiURL}/users`, { params }),
    )
    return users.length > 0 ? users[0] : null
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.env.apiURL}/users`)
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.env.apiURL}/users/${id}`, user)
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.env.apiURL}/users/${id}`)
  }
}
