import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userType: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.userType = '';
  }

  ngOnInit(): void {
    this.userType = localStorage.getItem('userType') as string;
    
  }

  logout(): void {
    localStorage.setItem('userType', '');
    
  }
}
