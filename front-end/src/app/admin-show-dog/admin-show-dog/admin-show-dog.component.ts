import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DogModel } from 'src/app/model/dog.model';
import { Dogservice } from 'src/app/service/dog.service';


@Component({
  selector: 'app-admin-show-dog',
  templateUrl: './admin-show-dog.component.html',
  styleUrls: ['./admin-show-dog.component.css']
})

export class AdminShowDogComponent implements OnInit {
  dog: DogModel = new DogModel()
  userType: string;
  name: any;


  constructor(private dogService:Dogservice, private route: ActivatedRoute, private router: Router) {
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

  

  save(name: string, breed: string, age: string, status: string, imgURL: string): void {
    this.dog.name = name
    this.dog.breed = breed
    this.dog.age = Number(age)
    this.dog.status = status
    this.dog.imgURL = imgURL
    

    if (this.dog) {
      this.dogService.updateDog(this.dog).subscribe();
      this.goBack()
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/dogs');
  }
}

