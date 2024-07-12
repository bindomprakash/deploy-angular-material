import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup
  loginMode: boolean = true;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
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
      if (res.message.refreshToken) {
        this.router.navigateByUrl('home');
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
