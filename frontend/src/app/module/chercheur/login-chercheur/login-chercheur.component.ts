import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/controller/service/Auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-chercheur',
  templateUrl: './login-chercheur.component.html',
  styleUrls: ['./login-chercheur.component.scss']
})
export class LoginChercheurComponent implements OnInit {
  loginForm = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    const formValues = this.loginForm.value;
    const username = formValues.username;
    const passowrd = formValues.password;
    this.authService.loginChercheur(username,passowrd);

  }
    register(){
    this.router.navigate(['/Chercheur/register']);
  }
}
