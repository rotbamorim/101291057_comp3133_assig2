import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [{
  path: 'login', component: LoginComponent,
},
{
  path: 'signup', component:SignupComponent,
},

{path: '', component:HomepageComponent,
           canActivate: [AuthGuard],},
           
{
  path: '**',
  redirectTo: '',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
