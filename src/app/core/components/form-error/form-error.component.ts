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
    required: 'This field is required',
    minlength: 'The value is too short',
    maxlength: 'The value is too long',
    email: 'Please enter a valid email address',
    pattern: 'The format is incorrect',
    //...
  }
}
