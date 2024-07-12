import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements AfterViewInit{

  loginMode: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

ngAfterViewInit(): void {
  this.authService.subject.subscribe((res: any)=>{
    this.loginMode = res;
  })
}  
  onLogout() {
    window.confirm('Are yur sure, you want to Logout ?')
    this.authService.subject.next(false)
    localStorage.clear();
    this.router.navigateByUrl('signup')
  }
}
