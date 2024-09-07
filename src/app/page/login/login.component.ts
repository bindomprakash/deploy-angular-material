import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup
  loginMode: boolean = true;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService) { }
  ngOnInit() {
    this.createSignupForm();
  }

  createSignupForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.authService.subject.next(true);
    this.loginUser();
  }

  loginUser() {
    this.authService.getLoginUser(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem("token", res.message.refreshToken);
      console.log(">>>>>>>>>>",res);
      
      if(res.message == 'Login success with email verification'){
        this.toastr.success("Please verify your email", "mail verification");
        if(res.user.isVerified == 1){
          this.router.navigateByUrl('home');
        }else{
          console.log("Email not verified ..");
          
        }
      }
      
    },
      (err) => {
        console.log("login error: ", err);
      }
    )
  }

  userLoginMode() {
    this.loginMode = !this.loginMode;
    this.router.navigateByUrl('signup');
  }
}
