import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPasswordComponent } from './x-password.component';

describe('XPasswordComponent', () => {
  let component: XPasswordComponent;
  let fixture: ComponentFixture<XPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XPasswordComponent]
    });
    fixture = TestBed.createComponent(XPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
