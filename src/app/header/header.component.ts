import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isLoggedIn$: Observable<boolean>;

  constructor(private readonly authService:AuthService){
    this.isLoggedIn$ = authService.authenticated$
  }

  ngOnInit(): void {
    
  }

  onLogout(){
    this.authService.logout();
  }

}
