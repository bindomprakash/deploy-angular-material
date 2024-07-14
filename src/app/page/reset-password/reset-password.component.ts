import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetForm !: FormGroup;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.maxLength(20)]],
      cpassword: ['', [Validators.required, Validators.maxLength(20)]]
    })
  }

  onSubmit() {
    if (this.resetForm.invalid) {
      return
    }
    

  }
}
