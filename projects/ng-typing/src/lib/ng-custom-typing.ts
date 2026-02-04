import { AfterViewInit, Directive, ElementRef, EventEmitter, input, OnDestroy, Output } from '@angular/core';
import { concatMap, delay, from, interval, Subject, Subscription, takeUntil } from 'rxjs';

@Directive({
  selector: '[app-typing]',
})
export class TypingDirective implements AfterViewInit, OnDestroy {

  text = input<string>()
  speed = input<number>(100)
  startDelay = input<number>(0)
  loop = input<boolean>(false)
  cursorChar = input<string>('|')
  showCursor = input<boolean>(true)
  autoStart = input<boolean>(true)

  @Output() typingStart = new EventEmitter<string>();
  @Output() typingEnd = new EventEmitter<string>();

  private destroy$ = new Subject<void>();
  private stop$ = new Subject<void>();

  private sub?: Subscription;
  private index = 0;

  constructor(private el: ElementRef<HTMLElement>) { }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.stop$.next();
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngAfterViewInit(): void {
    if (this.autoStart()) {
      this.start()
    }
  }

  start() {
    this.clear(false);
    this.typingStart.emit(this.text());
    this.sub = from(this.text()!.split(' '))
      .pipe(
        delay(this.startDelay()),
        concatMap(word =>
          interval(this.speed()).pipe(
            takeUntil(this.stop$),
            takeUntil(this.destroy$),
            concatMap(() => [word])

          )
        )
      ).subscribe({
        next: () => this.type(),
        complete: () => this.finish(),
        error: (err) => console.error(err),
      });

  }


  clear(resetIndex = true) {
    this.stop()
    if (resetIndex) this.index = 0;
    this.el.nativeElement.innerHTML = '';
  }

  type() {
    if (this.text()) {
      this.el.nativeElement.innerHTML = this.text()!.substring(0, this.index) + (this.showCursor() ? this.cursorChar() : '');
    }
    this.index++;
  }


  reset() {
    this.clear();
    this.start();
  }

  stop() {
    this.stop$.next();
    this.sub?.unsubscribe();
  }

  finish() {
    this.typingEnd.emit(this.text());
    this.stop();
    if (this.loop()) {
      setTimeout(() => {
        this.reset();
      }, 1000);
    }
  }


  continue() {
    if (this.index <= this.text()!.length) {
      this.sub?.unsubscribe()
      this.sub = interval(this.speed())
        .pipe(
          takeUntil(this.stop$),
          takeUntil(this.destroy$),
        )
        .subscribe({
          next: () => this.type(),
          complete: () => this.finish(),
          error: (err) => console.error(err),
        });
    } else {
      this.finish();
    }
  }

}
