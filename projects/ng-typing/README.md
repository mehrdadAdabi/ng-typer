# NgTyping

A powerful Angular library providing a typing animation directive for creating typewriter effects on text elements.

## Features

- **Typewriter Animation**: Creates a realistic typing effect on any HTML element
- **Configurable Speed**: Control the typing speed in milliseconds per character
- **Auto-Start**: Automatically start the animation on component initialization
- **Loop Support**: Automatically repeat the typing animation after completion
- **Cursor Display**: Show/hide an animated cursor during typing
- **Event Emitters**: Listen to typing start and end events
- **RxJS-Based**: Built with reactive programming patterns for smooth animations
- **Full Control**: Manual control methods for starting, stopping, and resetting animations

## Installation

```bash
npm install ng-typing
```

## Usage

Import the `TypingDirective` in your component:

```typescript
import { TypingDirective } from 'ng-typing';

@Component({
  selector: 'app-demo',
  template: `<h1 app-typing [text]="'Hello World'" [speed]="100"></h1>`,
  imports: [TypingDirective]
})
export class DemoComponent {}
```

## Directive Inputs

The `app-typing` directive accepts the following inputs:

- **`text`** (string, required): The text to be typed
- **`speed`** (number, default: 100): Delay in milliseconds between each character
- **`startDelay`** (number, default: 0): Initial delay before typing starts
- **`loop`** (boolean, default: false): Whether to repeat the animation after completion
- **`cursorChar`** (string, default: '|'): Character to display as cursor
- **`showCursor`** (boolean, default: true): Whether to show the cursor during typing
- **`autoStart`** (boolean, default: true): Whether to automatically start animation on init

## Directive Outputs

- **`typingStart`**: Emitted when typing animation begins
- **`typingEnd`**: Emitted when typing animation completes

## Directive Methods

- **`start()`**: Start the typing animation
- **`stop()`**: Pause the typing animation
- **`reset()`**: Reset and restart the animation
- **`clear()`**: Clear all text and reset

## Example

```typescript
import { Component, ViewChild } from '@angular/core';
import { TypingDirective } from 'ng-typing';

@Component({
  selector: 'app-example',
  template: `
    <div app-typing 
         #typingRef
         [text]="'Welcome to NgTyping!'" 
         [speed]="50"
         [showCursor]="true"
         (typingStart)="onStart()"
         (typingEnd)="onEnd()">
    </div>
  `,
  imports: [TypingDirective]
})
export class ExampleComponent {
  @ViewChild('typingRef') typingDirective!: TypingDirective;

  onStart() {
    console.log('Typing started');
  }

  onEnd() {
    console.log('Typing completed');
  }

  stopTyping() {
    this.typingDirective.stop();
  }
}


## Building

To build the library, run:

```bash
ng build ng-typing
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

## Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:
   ```bash
   cd dist/ng-typing
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Development

To run the demo application:

```bash
ng serve demo-app
```

Navigate to `http://localhost:4200/` to see the typing animation in action.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test ng-typing
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
