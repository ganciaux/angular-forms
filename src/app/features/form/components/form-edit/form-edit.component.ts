import { Component, effect, inject, signal } from '@angular/core'
import { Form, FORM_STATUS, FormStatus } from '../../models/form.model'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import { FormService } from '../../services/form.service'
import { JsonPipe } from '@angular/common'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { statusValidator } from '../../validators/form-validators'
import { FormErrorComponent } from '../../../../core/components/form-error/form-error.component'


@Component({
  selector: 'app-form-edit',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterLink,
    FormErrorComponent,
  ],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css',
})
export class FormEditComponent {
  formStatus = FORM_STATUS

  async onSubmit() {
    const formEdit = this.formGroup.value as Partial<Form>
    try {
      await this.formService.saveForm(this.formId(), formEdit)
      this.router.navigate(['/forms'])
    } catch (error) {
      console.error(error)
    }
  }
  form = signal<Form | null>(null)
  formId = signal('')
  httpClient = inject(HttpClient)
  route = inject(ActivatedRoute)
  router = inject(Router)
  formService = inject(FormService)
  fb = inject(FormBuilder)

  formGroup: FormGroup

  constructor() {
    this.formGroup = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl([
        Validators.required,
        statusValidator.bind(this),
      ]),
    })

    this.loadForm().then(() => console.log('loading form...'))
    effect(() => {
      const currentForm = this.form()
      if (currentForm) {
        this.formGroup.patchValue(currentForm)
      }
    })
  }

  async loadForm() {
    try {
      this.formId.set(this.route.snapshot.params['id'])
      if (this.formId()) {
        const form = await this.formService.loadForm({ formId: this.formId() })
        this.form.set(form[0])
      } else {
        console.error('missing form id')
      }
    } catch (error) {
      console.error(error)
    }
  }

  getControl(controlName: string): FormControl {
    return this.formGroup.get(controlName) as FormControl
  }
}
