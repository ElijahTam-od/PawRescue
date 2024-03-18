import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminShowDogComponent } from './admin-show-dog/admin-show-dog/admin-show-dog.component';
import { AdminShowDogsComponent } from './admin-show-dogs/admin-show-dogs/admin-show-dogs.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/authentication.service';
import { SignupComponent } from './signup/signup/signup.component';
import { UserDogDetailsComponent } from './user-dog-details/user.dog.details/user.dog.details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dogs', component: AdminShowDogsComponent },
  { path: 'dog/:id', component: AdminShowDogComponent },
  { path: 'add', component: AddDogComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'details/:id', component: UserDogDetailsComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
