import { inject, Injectable } from '@angular/core'
import { LoggerService } from './logger.service'

@Injectable({
  providedIn: 'root',
})
export class CalulatorService {

  constructor(private loggerService:LoggerService){}

  add(a: number, b: number): number {
    this.loggerService.log("CalulatorService: add()")
    return a + b
  }

  substract(a: number, b: number): number {
    this.loggerService.log("CalulatorService: substract()")
    return a - b
  }

  return(a: number): number {
    this.loggerService.log("CalulatorService: return()")
    return this.loggerService.return(a)
  }
}