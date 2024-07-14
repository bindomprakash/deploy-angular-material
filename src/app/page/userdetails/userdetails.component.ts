import { HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  userDetails: any[] = [];
  displayedColumns: string[] = ['Name', 'Email', 'City', 'Pincode', 'Address', 'Edit', 'Delete'];
  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.authService.getUserDetails().subscribe((res: any) => {
      this.userDetails = res.userDetails;
    },
      (err) => {
        console.log("Unable to get user details");
      })
  }

  onUpdate(user: any) {
    this.authService.updateUser.next(user);
    this.router.navigateByUrl('home')
  }

  onDelete(userId: any) {
    const token = localStorage.getItem('token');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    })

    if (userId) {
      console.log("user Id: ", userId);
      window.confirm("Are you sure, you want to delete ?");
      this.authService.deleteUserById(userId, header).subscribe((res: any) => {
        console.log(">>>>>>>>>>>>>>>", res);

        if (res.message == "User deleted successfully") {
          this.getUserDetails();
        }
      },
        (err) => {
          console.log("user deleted failed", err);
        }
      );
    }
  }
}
