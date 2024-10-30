import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router'
import { inject } from '@angular/core'
import { Form } from '../models/form.model'
import { FormService } from '../services/form.service'
import { from, Observable, of } from 'rxjs'

export const formResolver: ResolveFn<Form | null> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Observable<Form | null> => {
  const formId = route.paramMap.get('id')
  if (!formId) {
    console.log('resolver: no id')
    return of(null) // return Observable
  }
  const formService = inject(FormService)
  // Convert promise to Observable
  return from(formService.getFormById(formId))
}
