import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router:Router){}

  title = 'XLearn - Aulas particulares online';

  get isLoggedIn():boolean{
    return !this.router.url.includes('login')
  }

  logout(){
    this.router.navigate(['login']);
  }

  goToTeacherMaintenance(){
    this.router.navigate(['teacherMaintenance']);
  }
}
