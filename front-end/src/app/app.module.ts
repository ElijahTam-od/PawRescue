import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminShowDogComponent } from './admin-show-dog/admin-show-dog/admin-show-dog.component';
import { AdminShowDogsComponent } from './admin-show-dogs/admin-show-dogs/admin-show-dogs.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { UserDogDetailsComponent } from './user-dog-details/user.dog.details/user.dog.details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminShowDogComponent,
    AdminShowDogsComponent,
    AddDogComponent,
    LoginComponent,
    SignupComponent,
    UserDogDetailsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
