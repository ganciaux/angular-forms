import { LiveAnnouncer } from '@angular/cdk/a11y'
import {
  AfterViewInit,
  Component,
  ViewChild,
  effect,
  inject,
  signal,
} from '@angular/core'
import { MatSort, Sort, MatSortModule } from '@angular/material/sort'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { User } from '../../models/user.model'
import { UserService } from '../../services/user.service'
import { UserCardComponent } from '../user-card/user-card.component'
import { MatButton, MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatSortModule, MatTableModule, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  userService = inject(UserService)
  userList = signal<User[]>([])

  constructor() {
    this.loadUsers().then((data) =>
      console.log(`All users loaded:`, this.userList()),
    )
  }

  async loadUsers() {
    console.log('loadUsers')
    try {
      const Users = await this.userService.getUsers()
      this.userList.set(Users)
    } catch (err) {
      console.error(err)
    }
  }
}
