import { inject, Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialog = inject(MatDialog)

  openDialog(
    component: any,
    data: any = {},
    width: string = '600px',
    height: string = 'auto',
  ) {
    const close$ = this.dialog
      .open(component, {
        data,
        width,
        height,
      })
      .afterClosed()

    return firstValueFrom(close$)
  }
}
