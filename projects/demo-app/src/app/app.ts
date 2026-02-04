import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgTyping } from '../../../ng-typing/src/lib/ng-typing';
// import { TypingDirective } from '../../../ng-typing/src/lib/ng-custom-typing';
// import { NgTyping } from 'ng-typing';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgTyping],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-app');
}
