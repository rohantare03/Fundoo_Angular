import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UserService) { }

  ngOnInit() {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get f() { return this.forgetForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
      if (this.forgetForm.invalid) {
        return;
    }
    else{
      console.log("Forget password Successful", this.forgetForm.value);
      let reqData = {
        Email:this.forgetForm.value.email
      }
      this.user.Forgotpassword(reqData).subscribe((response:any) => {
        console.log(response);
      })
    }
  }
}
