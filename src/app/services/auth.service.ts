import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  subject = new Subject()
  signup_api = "http://localhost:5000/api/emp/signup";
  login_api = "http://localhost:5000/api/emp/login";
  user_api = "http://localhost:5000/api/emp/user";

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
}
