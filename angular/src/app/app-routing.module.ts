import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { IndexComponent } from './index/index.component';
import { IpAddressComponent } from './ip-address/ip-address.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: IndexComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  },
  {
    path: 'list',
    canActivate: [AuthGuard],
    component: IpAddressComponent
  },
  {
    path: 'list/edit/:id',
    canActivate: [AuthGuard],
    component: ListEditComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
