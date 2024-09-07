import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetForm !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.maxLength(20)]],
      cpassword: ['', [Validators.required, Validators.maxLength(20)]]
    })
  }

  userId: any;
  userToken: any;
  onSubmit() {
    if (this.resetForm.invalid) {
      return
    }
    this.activatedRoute.paramMap.subscribe((res: any) => {
      this.userId = res.params['id'];
      this.userToken = res.params['token']
      console.log(this.userId, this.userToken);

      if (res) {
        this.authService.resetPassword(this.userId, this.userToken, this.resetForm.value).subscribe((res: any) => {
          console.log("Reset password responce: ", res);
          if (res) {
            window.alert("Password reset successfully.");
            this.router.navigateByUrl('login');
          }
        }, (err) => {
          console.log("Failed reset password: ", err);
        })
      }
    })
  }
}
