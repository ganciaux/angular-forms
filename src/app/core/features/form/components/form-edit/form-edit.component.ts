import { Component, inject, signal } from '@angular/core'
import { Form } from '../../models/form.model'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'
import { FormService } from '../../services/form.service'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'app-form-edit',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css',
})
export class FormEditComponent {
  form = signal<Form | null>(null)
  httpClient = inject(HttpClient)
  route = inject(ActivatedRoute)
  formService = inject(FormService)

  constructor() {
    this.loadForm().then(() => console.log('loading form...'))
  }

  async loadForm() {
    try {
      const formId = this.route.snapshot.params['id']
      if (formId) {
        console.log("formId", formId)
        const form = await this.formService.loadForm({ formId })
        console.log(form);
        this.form.set(form[0])
      } else {
        console.log("formId non trouvé dans l'URL")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
