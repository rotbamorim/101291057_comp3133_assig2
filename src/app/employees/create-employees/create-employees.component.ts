import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateEmployeesGQL } from 'src/generated-types';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.scss']
})
export class CreateEmployeesComponent implements OnInit {

  employeeFirstName = new FormControl('', Validators.required)

  employeeLastName = new FormControl('', Validators.required)

  employeeEmail = new FormControl('', Validators.required)

  constructor(private readonly createEmployeesGql:CreateEmployeesGQL, private readonly dialogRef: MatDialogRef<CreateEmployeesComponent>){}
  ngOnInit(): void {}

  getEmployeeNameError(){
    if(this.employeeFirstName.hasError('required')){
      return 'Please enter a valid value.'
    }

    return '';
  }
createEmployees(){
  this.createEmployeesGql.mutate({
    createEmployeesData: {firstName: this.employeeFirstName.value!, lastName: this.employeeLastName.value!, email: this.employeeEmail.value!}
  }).subscribe(()=>{

    this.dialogRef.close

  })
}
}
