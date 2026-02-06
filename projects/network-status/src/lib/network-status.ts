import { Component, effect, inject, signal } from '@angular/core';
import { NetworkStatusService } from '../public-api';
import { NetworkStatusDirective } from './directives/disable-if-offline';

@Component({
  selector: 'lib-network-status',
  imports: [NetworkStatusDirective],
  template: `
    <p  libNetworkStatus>
      Your NetWork Status is {{currentUserStatus() ? 'Online' : 'Offline'}}
    </p>
  `,
  styles: ``,
})
export class NetworkStatus {
  networkService = inject(NetworkStatusService);
  currentUserStatus = signal<boolean>(true)
  constructor() {

    effect(() => {
      const status = this.networkService.isOnline()
      this.currentUserStatus.set(status)
      console.log('Network status:', status);
    })

  }
}
