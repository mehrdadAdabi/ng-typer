import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NetworkStatusService } from '../services/network-status';
import { NetworkStatusDirective } from "./disable-if-offline";

@Component({
  selector: 'lib-test-host',
  template: `<div libNetworkStatus></div>`,
  standalone: true,
  imports: [NetworkStatusDirective],
})
class TestHostComponent { }

describe('NetworkStatusDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [NetworkStatusService],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    directive = fixture.debugElement.query(el => el.name === 'div');
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directiveInstance = directive.injector.get(NetworkStatusDirective);
    expect(directiveInstance).toBeTruthy();
  });
});
