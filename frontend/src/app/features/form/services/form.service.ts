import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Form } from '../models/form.model'
import { firstValueFrom } from 'rxjs'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class FormService {
  env = environment

  http = inject(HttpClient)

  constructor() {}

  async loadForm(config: { formId?: string; query?: string }): Promise<Form[]> {
    const { formId, query } = config
    let params = new HttpParams()
    if (formId) {
      params = params.set('id', formId)
    }
    if (query) {
      params = params.set('query', query)
    }
    const forms$ = this.http.get<Form[]>(`${this.env.apiURL}/forms`, {
      params,
    })

    return firstValueFrom(forms$)
  }

  async getFormById(formId: string): Promise<Form | null> {
    const form$ = this.http.get<Form>(`${this.env.apiURL}/forms/${formId}`)
    return firstValueFrom(form$)
  }

  async saveForm(formId: string, changes: Partial<Form>): Promise<Form> {
    const form$ = this.http.put<Form>(
      `${this.env.apiURL}/forms/${formId}`,
      changes,
    )
    return firstValueFrom(form$)
  }
}
