import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map, merge, Observable, shareReplay, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkStatusService {

  online$: Observable<boolean>;
  public isOnline;

  constructor() {
    this.online$ = merge(
      fromEvent(window, 'online').pipe(map(() => true)),
      fromEvent(window, 'offline').pipe(map(() => false))
    ).pipe(
      startWith(navigator.onLine),
      shareReplay(1)
    );
    this.isOnline = toSignal(this.online$, { initialValue: navigator.onLine });
  }

}
