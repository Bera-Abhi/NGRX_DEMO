import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FruitsService } from '../services/fruits.service';
import {
  loadFruits,
  loadFruitsSuccess,
  loadFruitsFailure,
} from './fruits.action';

@Injectable()
export class FruitsEffects {
  private actions$ = inject(Actions);
  private fruitsService = inject(FruitsService);

  loadFruits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFruits),
      mergeMap(() =>
        this.fruitsService.getFruits().pipe(
          map((fruits) => loadFruitsSuccess({ fruits })),
          catchError((error) => of(loadFruitsFailure({ error: error.message })))
        )
      )
    )
  );
}
