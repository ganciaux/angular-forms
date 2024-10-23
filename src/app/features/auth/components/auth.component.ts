import { Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { Router, RouterLink } from '@angular/router'
import { FormErrorComponent } from '../../../core/components/form-error/form-error.component'
import { MatInputModule } from '@angular/material/input'
import { AuthService } from '../../../core/services/auth/auth.service'
import { MessagesService } from '../../../core/services/messages/messages.service'

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterLink,
    FormErrorComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  fb = inject(FormBuilder)
  messagesService = inject(MessagesService);
  authService = inject(AuthService)
  router = inject(Router)

  formGroup = this.fb.group({
    username: ['user', [Validators.required]],
    password: ['user', [Validators.required]],
  })

  async onSubmit() {
    try {
      const { username, password } = this.formGroup.value
      if (!username || !password) {
        return
      }
      await this.authService.login(username, password)
      await this.router.navigate(['/forms'])
    } catch (err) {
      this.messagesService.showMessage(''+err, 'error')
    }
  }

  getControl(controlName: string): FormControl {
    return this.formGroup.get(controlName) as FormControl
  }
}
