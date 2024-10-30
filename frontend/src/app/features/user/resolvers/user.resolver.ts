import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router'
import { UserService } from '../services/user.service'
import { inject } from '@angular/core'
import { from, Observable, of } from 'rxjs'
import { User } from '../models/user.model'

export const userResolver: ResolveFn<User | null> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Observable<User | null> => {
  const userId = route.paramMap.get('id')
  if (!userId) {
    console.log('resolver: no id')
    return of(null)
  }
  const userService = inject(UserService)
  return from(userService.getUserById(+userId))
}
