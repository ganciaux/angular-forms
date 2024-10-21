import { computed, effect, inject, Injectable, signal } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
import { Router } from '@angular/router'
import { User } from '../../../features/user/models/user.model'
import { environment } from '../../../../environments/environment'

const USER_STORAGE_KEY = 'user'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #userSignal = signal<User | null |undefined>(null)
  user = this.#userSignal.asReadonly()

  http = inject(HttpClient)
  router = inject(Router)

  isLoggedIn = computed(() => !!this.user());

  constructor() {
    this.loadUserFromStorage()
    effect(() => {
      const user = this.user()
      if (user) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
      }
    })
  }

  loadUserFromStorage() {
    const json = localStorage.getItem(USER_STORAGE_KEY)
    if (json) {
      const user = JSON.parse(json)
      this.#userSignal.set(user)
    }
  }

  async login(username: string, password: string): Promise<User> {
    let params = new HttpParams()
    params = params.set('username', username).set('password', password)
    const login$ = this.http.get<User[]>(`${environment.apiURL}/users`, {
      params,
    })
    const users = await firstValueFrom(login$)
    const user = users.find(
      (u) => u.username === username && u.password === password,
    )

    if (!user) {
      throw new Error('Utilisateur non trouvé ou informations incorrectes');
    }

    this.#userSignal.set(user)
    return user;
  }

  async logout() {
    localStorage.removeItem(USER_STORAGE_KEY)
    this.#userSignal.set(null)
    await this.router.navigateByUrl('/login')
  }
}
