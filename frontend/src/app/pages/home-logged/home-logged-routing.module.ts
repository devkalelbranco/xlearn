import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoggedComponent } from './home-logged.component';

const routes: Routes = [{ path: '', component: HomeLoggedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLoggedRoutingModule { }
