import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any

  constructor(private httpService : HttpService) { 
    this.token = localStorage.getItem('token')
  }

  registrations(reqdata: any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        // 'Authorization':'token'
      })
    }
    return this.httpService.postService('/User/Register',reqdata,false,header)
   
  }
  Login(reqdata: any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService('/User/Login',reqdata,false,header)
   
  }
  ForgetPassword(reqdata: any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
  
    return this.httpService.postService('/User/ForgetPassword?Email='+reqdata.Email,{},false,header)
   
  }
  ResetPassword(reqdata: any,token:any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+ token
      })
    }
    
    return this.httpService.postServiceReset('/User/ResetLink?password='+reqdata.password+'&confirmPassword='+reqdata.confirmPassword,{},true,header)
   
  }
}
