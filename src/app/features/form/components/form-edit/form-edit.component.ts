import {
  Component,
  effect,
  Inject,
  inject,
  Optional,
  signal,
} from '@angular/core'
import { Form, FORM_STATUS } from '../../models/form.model'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'
import { FormService } from '../../services/form.service'
import { CommonModule, JsonPipe } from '@angular/common'
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
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog'

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
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './form-edit.component.html',
  styleUrl: './form-edit.component.css',
})
export class FormEditComponent {
  formStatus = FORM_STATUS
  form = signal<Form | null>(null)
  formId = signal('')
  dataForm: any
  httpClient = inject(HttpClient)
  route = inject(ActivatedRoute)
  router = inject(Router)
  formService = inject(FormService)
  fb = inject(FormBuilder)

  formGroup: FormGroup

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
    @Optional() private dialogRef: MatDialogRef<FormEditComponent>,
  ) {
    this.dataForm = data
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
      if (this.data) {
        this.formId.set(this.dataForm.data.id)
      } else {
        this.formId.set(this.route.snapshot.params['id'])
      }
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

  async onSubmit() {
    const formEdit = this.formGroup.value as Partial<Form>
    try {
      await this.formService.saveForm(this.formId(), formEdit)
      if (this.data) {
        this.dialogRef.close({ ...formEdit, id: this.formId() })
      } else {
        this.router.navigate(['/forms'])
      }
    } catch (error) {
      console.error(error)
    }
  }

  getControl(controlName: string): FormControl {
    return this.formGroup.get(controlName) as FormControl
  }
}
