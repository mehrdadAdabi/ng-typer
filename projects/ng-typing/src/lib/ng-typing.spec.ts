import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTyping } from './ng-typing';

describe('NgTyping', () => {
  let component: NgTyping;
  let fixture: ComponentFixture<NgTyping>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTyping]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTyping);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
