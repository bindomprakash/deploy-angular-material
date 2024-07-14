import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgetForm!: FormGroup;
  editMode: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.forgetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    if (this.forgetForm.invalid) {
      return;
    }
    console.log(this.forgetForm);
    
    this.authService.forgotPassword(this.forgetForm.value).subscribe((res: any) => {
      console.log(res);
    }, (err) => {
      console.log("Forget password", err);
    })
  }
}
