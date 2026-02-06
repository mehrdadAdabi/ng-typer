import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NetworkStatus } from 'network-status';
// import { TypingDirective } from 'ng-typing';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NetworkStatus],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-app');
}
