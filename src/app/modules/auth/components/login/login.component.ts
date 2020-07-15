import { LoggedUserService } from './../../services/logged-user.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { GlobalRxjsService } from './../../../../core/services/global-rxjs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;


  constructor(private fb: FormBuilder,
    private loggedUserService:LoggedUserService,
    private router:Router,
    private globalRxjsService:GlobalRxjsService
    ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.loginForm = this.fb.group({
      email: ["", Validators.email],
      password: ["", Validators.email]
    });

  }
  onSubmit() {
      this.loggedUserService.login(this.loginForm.value).subscribe((res:any)=>{
        if(res.token){
          localStorage.setItem('token',res.token);
          this.globalRxjsService.behaviorSubject.next(true);
          this.router.navigate(['/']);
        }
        
      })
      
  }

}
