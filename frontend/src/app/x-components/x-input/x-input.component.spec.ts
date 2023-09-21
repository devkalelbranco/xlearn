import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XInputComponent } from './x-input.component';

describe('XInputComponent', () => {
  let component: XInputComponent;
  let fixture: ComponentFixture<XInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XInputComponent]
    });
    fixture = TestBed.createComponent(XInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
