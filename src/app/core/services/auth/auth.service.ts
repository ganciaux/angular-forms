import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../features/user/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)
  router = inject(Router)

  async login(email:string, password:string): Promise<User> {
    const login$ = this.http.post<User>(`${environment.apiRoot}/login`, {
      email,
      password});
    return firstValueFrom(login$);;
  }

  async logout() {
    await this.router.navigateByUrl('/login');
  }
}
