import { Component, inject, signal } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormControlService } from '../../../../core/services/form-control/form-control.service'
import { FormErrorComponent } from '../../../../core/components/form-error/form-error.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { AuthService } from '../../../../core/services/auth/auth.service'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { Router, RouterLink } from '@angular/router'
import { MessagesService } from '../../../../core/services/messages/messages.service'
import { UserService } from '../../../user/services/user.service'
import { User } from '../../../user/models/user.model'

@Component({
  selector: 'app-auth-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterLink,
    FormErrorComponent,
  ],
  templateUrl: './auth-add.component.html',
  styleUrl: './auth-add.component.css',
})
export class AuthAddComponent {
  isSubmitting = signal(false)
  fb = inject(FormBuilder)
  formControlService = inject(FormControlService)
  authService = inject(AuthService)
  messageService = inject(MessagesService)
  userService = inject(UserService)
  router = inject(Router)
  formGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  async onSubmit(): Promise<void> {
    if (this.formGroup.invalid) {
      return
    }

    this.isSubmitting.set(true)

    const userNew = this.formGroup.value as Partial<User>

    this.formGroup.disable()

    try {
      const user = await this.userService.createUser(userNew)
      this.messageService.showMessage('Utilisateur créé avec succès', 'success')

      this.formGroup.reset()

      await this.authService.login(user.username, user.password)

      this.isSubmitting.set(false)
      this.router.navigate(['/forms'])

    } catch (err) {
      this.formGroup.enable()
      this.messageService.showMessage(err as string, 'error')
    } 
  }
}
