import { Component, effect, inject, signal } from '@angular/core'
import { AuthService } from '../../../../core/services/auth/auth.service'
import { JsonPipe } from '@angular/common'
import { User } from '../../models/user.model'

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css',
})
export class UserAccountComponent {
  autService = inject(AuthService)
  user = signal(this.autService.user())
}
