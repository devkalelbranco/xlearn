import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XToasterComponent } from './x-toaster.component';

describe('XToasterComponent', () => {
  let component: XToasterComponent;
  let fixture: ComponentFixture<XToasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XToasterComponent]
    });
    fixture = TestBed.createComponent(XToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
