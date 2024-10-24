import {
  Component,
  inject,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatMenuModule } from '@angular/material/menu'
import { MatGridListModule } from '@angular/material/grid-list'
import { ReactiveFormsModule } from '@angular/forms'
import { LoadingComponent } from './features/loading/components/loading.component'
import { AuthService } from './core/services/auth/auth.service'
import { MessagesComponent } from './core/components/messages/messages/messages.component'
import { MatTooltipModule } from '@angular/material/tooltip'
import {
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatGridListModule,
    LoadingComponent,
    MessagesComponent,
    MatTooltipModule,
    MatExpansionModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('start') start!: MatSidenav
  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>

  authService = inject(AuthService)

  isLoggedIn = this.authService.isLoggedIn

  title = 'angular-forms'
  opened = false
  panelUserState = signal(false)
  panelFormState = signal(false)

  onLogout() {
    this.authService.logout()
  }

  toggleSidebar(event: MouseEvent): void {
    event.stopPropagation()
  }

  closeSidenav() {
    this.start.close()
    this.closeAllPanels()
  }

  closeAllPanels() {
    this.panels.forEach((panel) => panel.close())
  }

  onSidenavToggle($event: boolean) {
    this.closeAllPanels()
  }
}
