import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DogModel } from 'src/app/model/dog.model';
import { Dogservice } from 'src/app/service/dog.service';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { NumberSymbol } from '@angular/common';


@Component({
  selector: 'app-user.dog.details',
  templateUrl: './user.dog.details.component.html',
  styleUrls: ['./user.dog.details.component.css']
})

export class UserDogDetailsComponent implements OnInit {
  dog: DogModel = new DogModel()

  userType: string;
  name: any;




  constructor(private dogService:Dogservice, private userService:UserService, private route: ActivatedRoute, private router: Router) {
    this.userType = '';
  }

  ngOnInit(): void {
    this.userType = localStorage.getItem('userType') as string;
    this.route.params.forEach((params: Params) => {
      if(params ['id'] !== undefined) {
        const id = params['id'];
        this.dogService.getDog(id).subscribe(data => {this.dog=data})
      }
    })
  }
  submit(): void {
    const id = localStorage.getItem('userId')
    const username = localStorage.getItem('username');
    const dogname = localStorage.getItem('dogName');
    const dogId = localStorage.getItem('dogId');
    var request = "";
    const password = "";
    const userType = "";
    const username1 = "";

    request = username+":"+dogId+"-"+dogname;
    console.log(request)

    if (request != null){
      const user = new User(Number(id), username1, password, userType, request)

      if (user) {
        this.userService.updateUser(user).subscribe();
        this.goBack()
      }
    }



  }

  goBack(): void {
    this.router.navigateByUrl('/dogs');
  }

  }


  


