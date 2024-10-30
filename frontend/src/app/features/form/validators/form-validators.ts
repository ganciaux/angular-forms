import { AbstractControl, ValidatorFn } from '@angular/forms'
import { FORM_STATUS } from '../models/form.model'

export function statusValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return FORM_STATUS.includes(control.value)
      ? null
      : { invalidStatus: { value: control.value } }
  }
}
