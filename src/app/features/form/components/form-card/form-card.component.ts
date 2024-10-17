import { Component, input } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatButtonModule } from '@angular/material/button'
import { Form } from '../../models/form.model'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-form-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatButtonModule, RouterLink],
  templateUrl: './form-card.component.html',
  styleUrl: './form-card.component.css',
})
export class FormCardComponent {
  formDelete(formId: string) {
    throw new Error('Method not implemented.')
  }
  form = input.required<Form>()
}
