import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { CreateEmployeesModule } from './create-employees/create-employees.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card'



@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    CreateEmployeesModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
  ],
  exports:[
    EmployeesComponent,
  ],
})
export class EmployeesModule { }
