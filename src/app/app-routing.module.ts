import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { GetAllNotesComponent } from './Component/get-all-notes/get-all-notes.component';

const routes: Routes = [
  {path:'Registration',component:RegistrationComponent},
  {path:'Login',component:LoginComponent},
  {path:'ForgetPassword',component:ForgetPasswordComponent},
  {path:'ResetPassword/:token',component:ResetPasswordComponent},
  {path:'home',component:DashboardComponent,
  children:[
    {path:'', redirectTo:"/home/notes", pathMatch:'full' },
    {path:'notes', component:GetAllNotesComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
