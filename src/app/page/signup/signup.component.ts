import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm!: FormGroup;
  loginMode: boolean = true;
  parentMessage = 'Message from Parent';
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.signupUser();
  }

  signupUser() {
    this.authService.getSignupUser(this.signupForm.value).subscribe((res) => {
      console.log("signup user: ", res);
    },
      (err) => {
        console.log("signup error: ", err);
      }
    )
  }

  userLoginMode() {
    this.loginMode = !this.loginMode;
    this.router.navigateByUrl('login');
    console.log(this.loginMode);
  }
}
