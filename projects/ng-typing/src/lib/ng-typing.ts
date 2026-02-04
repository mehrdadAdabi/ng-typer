import { Component, ViewChild } from '@angular/core';
import { TypingDirective } from './ng-custom-typing';

@Component({
  selector: 'lib-ng-typing',
  imports: [TypingDirective],
  template: `
        <h1 app-typing [loop]="true" [text]="testText" [speed]="100"></h1>
        <div class='flex gap-2 mt-3'>
          <button class="btn border min-w-3.5 p-1.5 btn-primary" (click)="reset()">Reset</button>
          <button class="btn border min-w-3.5 p-1.5 btn-secondary" (click)="stop()">Stop</button>
          <button class="btn border min-w-3.5 p-1.5 btn-success" (click)="continue()">Continue</button>
        </div>

  `,
  styles: ``,
})
export class NgTyping {

  @ViewChild(TypingDirective) typing!: TypingDirective;

  testText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  reset() {
    this.typing.reset();
  }

  stop() {
    this.typing.stop();
  }

  continue() {
    this.typing.continue();
  }
}