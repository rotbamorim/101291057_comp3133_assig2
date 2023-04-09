import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @Output() onSubmitEvent = new EventEmitter();
  @Input() submitLabel: string;

  username = new FormControl('',[Validators.required])
  password = new FormControl('', [Validators.required])

  constructor(){

  }

  ngOnInit(): void {
    
  }

  getUsernameErrorMessage(){
    if(this.username.hasError('required')){
      return 'Please enter a valid username'
    }

    return this.username.hasError('username')?'Not a valid username':'';
  }

  getPasswordErrorMessage(){
    if(this.password.hasError('required')){
      return 'Please enter a valid password'
    }

    return this.password.hasError('password')?'Not a valid password':'';
  }

  onSubmit(){
    this.onSubmitEvent.emit({
      username: this.username.value,
      password: this.password.value
    })
  }

}
