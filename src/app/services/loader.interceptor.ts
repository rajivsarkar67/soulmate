import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { DataService } from './data.service';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const dataService = inject(DataService);
  dataService.isLoading.set(true);

  return next(req).pipe(
    finalize(() => dataService.isLoading.set(false))
  );
};