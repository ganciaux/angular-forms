import { Component, computed, effect, inject } from '@angular/core'
import { MessagesService } from '../../../services/messages/messages.service'
import { NgClass } from '@angular/common'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgClass],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  messagesService = inject(MessagesService)

  message = this.messagesService.message

  private _snackBar = inject(MatSnackBar)

  constructor() {
    effect(() => {
      const message = this.message()
      if (message) {
        const snackBarRef = this._snackBar.open(message.text, 'close', {
          panelClass: [message.severity],
          duration: 3000,
        })
        snackBarRef.afterDismissed().subscribe(() => {
          this.messagesService.clear()
        })
      }
    })
  }

  onClose() {
    this.messagesService.clear()
  }
}
