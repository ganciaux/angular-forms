import { Component, inject, input, signal } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog'
import { DialogData } from '../../../models/dialog-data.model'
import { DialogMode } from '../../../models/dialog-modes.enum'

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogContent, MatDialogActions],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  dialogRef = inject(MatDialogRef<DialogComponent>)
  data = inject(MAT_DIALOG_DATA) as DialogData

  title: string = ''
  subtitle: string = ''
  element: string = 'cet élement'
  action: string = 'cette action'

  constructor() {
    console.log(this.data)
    this.setDialogValuesBasedOnMode(this.data.mode)
  }

  setDialogValuesBasedOnMode(mode: number): void {
    switch (mode) {
      case DialogMode.DELETE:
        if (this.data.element) {
          this.element = this.data.element
        }
        this.title = 'Confirmer la suppression'
        this.subtitle = `Êtes-vous sûr de vouloir supprimer '${this.element}' ?`
        break
      case DialogMode.ACTION:
        if (this.data.action) {
          this.action = this.data.action
        }
        this.title = "Confirmer l'action"
        this.subtitle = `Voulez-vous vraiment effectuer '${this.action}' ?`
        break
      default:
        this.title = 'Confirmer'
        this.subtitle = 'Voulez-vous continuer ?'
        break
    }

    if (this.data.title) {
      this.title = this.data.title
    }
    if (this.data.subtitle) {
      this.subtitle = this.data.subtitle
    }
  }

  onConfirm(): void {
    this.dialogRef.close(true)
  }

  onCancel(): void {
    this.dialogRef.close(false)
  }
}
