import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/UserService/user.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassword: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit(): void {
    this.forgetPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get f() { return this.forgetPassword.controls; }

  RetrivePassword() {
    this.submitted = true;

    if (this.forgetPassword.valid) {
        console.log(this.forgetPassword.value)
        let reqData = {
          Email: this.forgetPassword.value.email,
        }
        console.log(reqData)
        this.user.ForgetPassword(reqData).subscribe((response : any) => {
          console.log(response);
         
        });
    }
  }

}
