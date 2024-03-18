import { Component } from '@angular/core';
import { AuthService } from '../service/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  id: number = 0;
  username: string = '';
  password: string = '';
  request: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(f: NgForm) {
    console.log(f.value)
    this.authService.login(this.id, this.username, this.password, 'admin', this.request)
      .subscribe(
        {
          next: (data) => {
            const user = data as User;
            localStorage.setItem('userId', user.id.toString());
            localStorage.setItem('userType', user.usertype);
            localStorage.setItem('username', user.username)
            this.router.navigate(['/dogs']);
          },
          error: (msg) => {
            console.log('Error Getting Location: ', msg);
          }
        }
      );
  }

}
