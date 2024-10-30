import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import {inject} from "@angular/core";
import {finalize} from "rxjs";
import { loadingSkip } from "../components/loading-skip.component";
import { LoadingService } from "./loading.service";

export const loadingInterceptor: HttpInterceptorFn =
  (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    if(req.context.get(loadingSkip)) {
     return next(req);
    }
    const loadingService = inject(LoadingService);
    loadingService.loadingOn();
    return next(req)
      .pipe(
        finalize(() => {
          loadingService.loadingOff()
        })
      )
  }