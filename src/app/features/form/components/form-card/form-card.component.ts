import { Component, inject, input, output } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatButtonModule } from '@angular/material/button'
import { Form } from '../../models/form.model'
import { RouterLink } from '@angular/router'
import { DialogService } from '../../../../core/services/dialog/dialog.service'
import { FormEditComponent } from '../form-edit/form-edit.component'
import { DialogComponent } from '../../../../core/components/dialog/dialog/dialog.component'
import { MatDialog } from '@angular/material/dialog'
import { DialogMode } from '../../../../core/models/dialog-modes.enum'

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
  formDeleted = output<string>()
  dialogService = inject(DialogService)
  dialog = inject(MatDialog)

  async formDelete(formId: string) {
    const result = await this.dialogService.openDialog(DialogComponent, {data: {mode: DialogMode.DELETE}});
    if (result === true) {
      this.formDeleted.emit(formId)
    } 
    return 
  }

  async openEditFormDialog() {
    const editForm = await this.dialogService.openDialog(FormEditComponent, {
      data: this.form(),
    })
    if (!editForm) {
      return
    }
    this.formUpdated.emit(editForm)
  }
}
