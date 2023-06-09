import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-App-GM';

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  constructor(private authService : AuthService){

  }

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }

  logout(){
    this.authService.logout()
  }
}
