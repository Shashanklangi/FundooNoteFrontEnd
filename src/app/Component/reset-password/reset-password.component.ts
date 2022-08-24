import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/UserService/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword: FormGroup;
  submitted = false;
  token:any;

  constructor(private formBuilder: FormBuilder,private user:UserService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);

  }
  // get f() { return this.resetPassword.controls; }

  SetPassword() {
    this.submitted = true;

    if (this.resetPassword.valid) {
        console.log(this.resetPassword.value)
        let reqData = {
          password: this.resetPassword.value.password,
          confirmPassword: this.resetPassword.value.confirmPassword
        
        }
        this.user.ResetPassword(reqData, this.token).subscribe((response:any) => {
          console.log(response);
        })
    }
  }

}
