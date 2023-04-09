import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { EmployeesModule } from '../employees/employees.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    EmployeesModule
  ]
})
export class HomepageModule { }
