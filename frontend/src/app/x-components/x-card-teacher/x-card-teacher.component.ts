import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-card-teacher',
  templateUrl: './x-card-teacher.component.html',
  styleUrls: ['./x-card-teacher.component.scss']
})
export class XCardTeacherComponent {
  @Input('image') image:string="assets/persons/teacher_default.jpg";
  @Input('value') value?:string;
  @Input('text') text?:string;
  @Input('title') title?:string;
  @Input('footer') footer?:string;
}

