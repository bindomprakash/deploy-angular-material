import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, OnDestroy {

  constructor(private _router: Router, private authService: AuthService) { }
  
  ngOnInit() {
    localStorage.clear();
    this._router.navigateByUrl('signup');
  }

  ngOnDestroy(): void {
     this.authService.subject.next(false)
  }
 
}
