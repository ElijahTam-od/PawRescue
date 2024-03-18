import { Component} from '@angular/core';
import { DogModel } from 'src/app/model/dog.model';
import { Dogservice } from 'src/app/service/dog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent {
  dogs: DogModel[] = []
  addedAge: number = 0

  constructor(private dogService: Dogservice , private router: Router) {}

  ngOnInit(): void {
    this.dogService.getAllDogs().subscribe((data: DogModel[]) => {this.dogs=data});
  } 

  add(name: string, breed: string, age: string, status: string, imgURL: string): void {
    name = name.trim();
    breed = breed.trim();
    age = age.trim();
    status = status.trim();
    imgURL = imgURL.trim();

    this.addedAge = Number(age)

    if (!name || !breed || !this.addedAge || !status || !imgURL) { return; }
    this.dogService.addDog({ name, breed, age, status, imgURL } as unknown as DogModel).subscribe(dog => {this.dogs.push(dog);});
    this.goBack()
  }

  goBack(): void {
    this.router.navigateByUrl('/dogs');
  }
}
