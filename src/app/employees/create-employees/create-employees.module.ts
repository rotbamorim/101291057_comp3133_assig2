import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeesComponent } from './create-employees.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CreateEmployeesComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports:[
    CreateEmployeesComponent
  ]
})
export class CreateEmployeesModule { }
