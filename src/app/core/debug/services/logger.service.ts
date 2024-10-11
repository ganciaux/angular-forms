import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string) {
    console.log(`logger: ${message}`)
  }

  return(value: number) {
    console.log(`return: ${value}`)
    return value;
  }
}
