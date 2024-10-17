import { Component, inject, signal } from '@angular/core'
import { MatProgressSpinner } from '@angular/material/progress-spinner'
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatProgressSpinner],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  loadingService = inject(LoadingService);

  loading = this.loadingService.loading;
}