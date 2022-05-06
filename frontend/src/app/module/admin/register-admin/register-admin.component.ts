import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/controller/model/User.model';
import { AuthService } from 'src/app/controller/service/Auth.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  registerForm = new FormGroup({
    prenom : new FormControl('',Validators.required),
    nom : new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    userName : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  submit(){
    const formValues = this.registerForm.value;
    const {prenom,nom,userName,password,email} = formValues;
    this.user.prenom = prenom;
    this.user.nom = nom;
    this.user.username = userName;
    this.user.password = password;
    this.user.email = email;
    this.authService.register();

  }
    get user(): User {
        return this.authService.user;
    }

    set user(value: User) {
        this.authService.user = value;
    }

}
