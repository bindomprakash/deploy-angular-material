import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  subject = new Subject();
  updateUser = new Subject();
  signup_api = "http://localhost:5000/api/emp/signup";
  login_api = "http://localhost:7000/api/user/login";
  user_api = "http://localhost:5000/api/emp/user";
  userDetails_api = "http://localhost:5000/api/emp/user-details";
  userDelete_api = "http://localhost:5000/api/emp/user-delete";
  updateUser_api = "http://localhost:5000/api/emp/user-details";
  forgotPassword_api = "http://localhost:5000/api/emp/forgot-password";
  resetPassword_api = "http://localhost:5000/api/emp/reset-password";

  token = localStorage.getItem('token');
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${this.token}`
  })

  constructor(private http: HttpClient) { }

  getSignupUser(user: any) {
    return this.http.post(this.signup_api, user);
  }

  getLoginUser(user: any) {
    return this.http.post(this.login_api, user);
  }

  createUser(user: any, header: any) {
    return this.http.post(this.user_api, user, { headers: header });
  }

  getUserDetails() {
    return this.http.get(this.userDetails_api, { headers: this.header })
  }

  deleteUserById(userId: any, header: any) {
    console.log("api :>>>>", this.userDelete_api + "/" + userId);
    return this.http.delete(this.userDelete_api + "/" + userId, { headers: header });
  }

  updateUserById(userId: any) {
    return this.http.patch(this.updateUser_api, userId);
  }

  forgotPassword(user: any) {
    return this.http.post(this.forgotPassword_api, user);
  }

  resetPassword(userId: any, userToken: any, user: any) {
    console.log(`${this.resetPassword_api}/${userId}/${userToken}`, user);

    return this.http.post(`${this.resetPassword_api}/${userId}/${userToken}`, user)
  }
}
