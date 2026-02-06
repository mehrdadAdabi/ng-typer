import { Directive, ElementRef, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { NetworkStatusService } from '../services/network-status';

@Directive({
  selector: '[libNetworkStatus]',
  standalone: true
})
export class NetworkStatusDirective implements OnInit, OnDestroy {
  private sub = new Subscription();

  networkService = inject(NetworkStatusService);

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }


  ngOnInit(): void {
    this.sub = this.networkService.online$.subscribe((isOnline) => {
      this.applyLogic(isOnline);
    });

  }

  private applyLogic(isOnline: boolean) {
    const element = this.el.nativeElement
    if (isOnline) {
      this.renderer?.removeAttribute(element, 'disabled');
    } else {
      this.renderer?.setAttribute(element, 'disabled', '');
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
