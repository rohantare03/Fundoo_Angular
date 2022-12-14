import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UserService, private route : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    else{
      console.log("Login Successful", this.loginForm.value);
      let reqData = {
        Email:this.loginForm.value.email,
        Password:this.loginForm.value.password
      }
      this.user.Login(reqData).subscribe((response:any) => {
        localStorage.setItem("token",response.data)
        console.log(response);
        this.route.navigateByUrl('/dashboard/notes');
      })
    }
   
 }

}
