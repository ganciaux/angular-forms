import { Component, input } from '@angular/core';
import { User } from '../../models/user.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  user = input.required<User>()
}
