import { Component } from '@angular/core';
import { LoginForm, RegisterForm } from 'src/app/types/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  }

  constructor(private authService : AuthService){

  }

  ngOnInit(): void {

  }



  submit(){
    this.authService.register(this.form)
  }

  isLoading(){
    return this.authService.isLoading;
  }
}
