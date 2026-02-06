# Network Status Library

An Angular library for detecting and managing online/offline status with built-in directives and services.

## Features

- **NetworkStatusService**: RxJS Observable and Angular Signal-based online/offline detection
- **NetworkStatusDirective**: Standalone directive to disable/enable elements based on connection status
- **Reactive**: Built with RxJS and Angular's modern signal API
- **Standalone**: Fully standalone components and directives (Angular 14+)
- **Provided at root**: Service is automatically available application-wide

## Installation

```bash
npm install network-status
```

## Usage

### NetworkStatusService

Inject and use the service to monitor network connectivity:

```typescript
import { Component, effect, inject } from '@angular/core';
import { NetworkStatusService } from 'network-status';

@Component({
  selector: 'app-status',
  template: `
    <p>Online: {{ isOnline() }}</p>
  `,
})
export class StatusComponent {
  networkService = inject(NetworkStatusService);
  
  // Access as Signal
  isOnline = this.networkService.isOnline;
  
  // Or subscribe to Observable
  constructor() {
    effect(() => {
      console.log('Connection status:', this.isOnline());
    });
  }
}
```

#### API

**`NetworkStatusService`**

| Property | Type | Description |
|----------|------|-------------|
| `online$` | `Observable<boolean>` | Observable stream of online/offline status |
| `isOnline` | `Signal<boolean>` | Angular signal containing current online status |

### NetworkStatusDirective

Use the `libNetworkStatus` directive to automatically disable/enable elements based on connection:

```typescript
import { Component } from '@angular/core';
import { NetworkStatusDirective } from 'network-status';

@Component({
  selector: 'app-button',
  imports: [NetworkStatusDirective],
  template: `
    <button libNetworkStatus>
      Submit (disabled when offline)
    </button>
  `,
})
export class ButtonComponent {}
```

The directive sets the `disabled` attribute on elements when the connection is lost and removes it when online.

## Building

Build the library:

```bash
npm run build -- network-status
```

Output is generated in `dist/network-status/`.

## Testing

Run unit tests:

```bash
npm test -- --project=network-status
```

## Architecture

- **Service**: Monitors browser `online` and `offline` events via `window` and exposes status through Observable and Signal
- **Directive**: Standalone, DI-enabled directive that subscribes to the service and applies disabled attribute logic
- **Public API**: All exports routed through `src/public-api.ts`

## Browser Compatibility

Works with all modern browsers that support:
- `navigator.onLine`
- `window.online`/`window.offline` events
- RxJS 7.8+
- Angular 21.1+
