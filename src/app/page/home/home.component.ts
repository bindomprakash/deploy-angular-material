import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userForm!: FormGroup;

  constructor(private authService: AuthService,
     private fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.createUserForm();
    
  }

  createUserForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.maxLength(20)]],
    })
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return 
    }
    console.log(this.userForm.value);
    this.postUserData();
  }

  postUserData() {
    const userData = this.userForm.value;
    const token = localStorage.getItem("token");
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    })
    this.authService.createUser(userData, header).subscribe((res: any) => {
      console.log("user responce: ", res);
    },
      (err) => {
        console.log("Post user error: ", err);
      }
    )
  }
}

