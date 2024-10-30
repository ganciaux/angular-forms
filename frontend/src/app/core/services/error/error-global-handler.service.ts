import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorGlobalHandler implements ErrorHandler {
  handleError(error: any) {
    console.error('Une erreur globale a été interceptée :', error);
  }
}