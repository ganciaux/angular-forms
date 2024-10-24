import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.css',
})
export class FormErrorComponent {
  @Input() control!: FormControl
  @Input() customMessages: { [key: string]: string } = {}

  get errorMessage(): string | null {
    if (this.control && this.control.errors && this.control.touched) {
      const errors = this.control.errors
      const firstErrorKey = Object.keys(errors)[0]

      return (
        this.customMessages[firstErrorKey] ||
        this.defaultErrorMessages[firstErrorKey] ||
        null
      )
    }
    return null
  }

  private defaultErrorMessages: { [key: string]: string } = {
    required: 'Le champs est obligatoire',
    minlength: 'La longueur du texte est trop courte',
    maxlength: 'La longueur du texte est trop longue',
    email: `L'email n'est pas correct`,
    pattern: `Le format attendu n'est pas correct`,
    //...
  }
}
