import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { VegetablesService } from '../services/vegetables.service';
import {
  loadVegetables,
  loadVegetablesFailure,
  loadVegetablesSuccess,
} from './vegetables.action';

@Injectable()
export class VegitablesEffects {
  private actions$ = inject(Actions);
  private vegetablesService = inject(VegetablesService);

  loadFruits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVegetables),
      mergeMap(() =>
        this.vegetablesService.getVegetables().pipe(
          map((vegetables) => loadVegetablesSuccess({ vegetables })),
          catchError((error) =>
            of(loadVegetablesFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
