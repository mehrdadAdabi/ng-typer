import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TypingDirective } from "./ng-custom-typing";

@Component({
  template: `<h1 app-typing [text]="testText" [speed]="100" [autoStart]="true"></h1>`,
  standalone: true,
  imports: [TypingDirective]
})

class TestComponent {
  testText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

}

describe("TypingDirective", () => {
  let fixture: ComponentFixture<TestComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, TypingDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('h1');
  });

  it("should create an instance", () => {
    expect(element.innerHTML).not.toContain('Hello');
  });

  it("should type text", (done) => {
    setTimeout(() => {
      fixture.detectChanges();

      expect(element.innerHTML).toContain('Hello');
    }, fixture.componentInstance.testText.length * 100 + 500);
  });

})