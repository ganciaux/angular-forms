import { Injectable } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  getControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl
  }
}
