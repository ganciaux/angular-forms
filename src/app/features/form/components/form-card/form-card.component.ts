import { Component, inject, input, output } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatButtonModule } from '@angular/material/button'
import { Form } from '../../models/form.model'
import { RouterLink } from '@angular/router'
import { DialogService } from '../../../../core/services/dialog/dialog.service'
import { FormEditComponent } from '../form-edit/form-edit.component'

@Component({
  selector: 'app-form-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatButtonModule, RouterLink],
  templateUrl: './form-card.component.html',
  styleUrl: './form-card.component.css',
})
export class FormCardComponent {
  form = input.required<Form>()
  formUpdated = output<Form>()
  dialogService = inject(DialogService)

  formDelete(formId: string) {
    throw new Error('Method not implemented.')
  }
  async openEditFormDialog() {
    const editForm = await this.dialogService.openDialog(FormEditComponent, {
      data: this.form(),
    })
    if (!editForm) {
      return
    }
    console.log(`Form edited:`, editForm)
    this.formUpdated.emit(editForm)
  }
}
