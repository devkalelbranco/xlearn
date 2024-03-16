import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMaintenanceComponent } from './teacher-maintenance.component';

describe('TeacherMaintenanceComponent', () => {
  let component: TeacherMaintenanceComponent;
  let fixture: ComponentFixture<TeacherMaintenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherMaintenanceComponent]
    });
    fixture = TestBed.createComponent(TeacherMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
