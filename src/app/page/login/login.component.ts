import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      message: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.myForm.value);

  }
}
