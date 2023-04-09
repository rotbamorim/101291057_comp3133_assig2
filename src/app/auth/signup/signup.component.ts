import { Component, OnInit } from '@angular/core';
import { CreateUserGQL } from '../../../generated-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  implements OnInit{

  constructor(private readonly createUserGql:CreateUserGQL, private readonly router:Router){

  }

  ngOnInit(): void {
    
  }

  signUp({username, password}:any){
    this.createUserGql.mutate({createUserData:{username, password}}).subscribe(() => { this.router.navigate(['/']);
  });;
  }

}
