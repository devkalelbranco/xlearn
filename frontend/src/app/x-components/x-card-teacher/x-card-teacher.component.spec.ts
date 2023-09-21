import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XCardTeacherComponent } from './x-card-teacher.component';

describe('XCardTeacherComponent', () => {
  let component: XCardTeacherComponent;
  let fixture: ComponentFixture<XCardTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XCardTeacherComponent]
    });
    fixture = TestBed.createComponent(XCardTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
