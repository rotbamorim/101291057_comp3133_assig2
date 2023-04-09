import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import {MatInputModule} from "@angular/material/input"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports:[
    AuthComponent,
  ]
})
export class AuthModule { }
