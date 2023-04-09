import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { CreateEmployeesComponent } from './create-employees/create-employees.component';
import { Employees, EmployeesGQL } from 'src/generated-types';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees$: Observable<Employees[]>

  constructor(
    private readonly dialog:MatDialog,
    private readonly employeesGql:EmployeesGQL
  ){}

  ngOnInit(): void {
    this.employees$ = this.employeesGql.watch().valueChanges.pipe(map((result)=> result.data.employees))
  }

  onFabClick(){
    this.dialog.open(CreateEmployeesComponent, {height: '50%', width:'30%'})
  }

  onEmployeeClick(){

  }

}
