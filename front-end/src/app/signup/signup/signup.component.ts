import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  users: User[] = [];
  errorMessage: string = ''; // New property for holding error messages

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  add(username: string, password: string, usertype: string): void {
    username = username.trim();

    if (!username || !password) {
      this.showErrorMessage();
      return;
    }

    // Check if the username already exists among the loaded users
    const userExists = this.users.some(user => user.username === username);

    if (userExists) {
      // If the username is already taken, we set an error message.
      this.errorMessage = 'The username is already taken. Please choose another one.';
    } else {
      // If the username doesn't exist, proceed with the account creation process.
      password = password.trim();
      usertype = usertype.trim();

      this.userService.addUser({ username, password, usertype } as User).subscribe(user => {
        this.users.push(user);
        localStorage.setItem('userId', user.id.toString());
        localStorage.setItem('userType', user.usertype);
        localStorage.setItem('username', user.username)
        this.router.navigate(['/dogs']); // Navigate only after user is added successfully.
      });
    }
  }

  showErrorMessage(): void {
    this.errorMessage = 'Both username and password must be provided.';
  }
}