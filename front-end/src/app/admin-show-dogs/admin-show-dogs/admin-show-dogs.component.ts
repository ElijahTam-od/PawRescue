import { Component } from '@angular/core';
import { DogModel } from 'src/app/model/dog.model';
import { User } from 'src/app/model/user.model';
import { Dogservice } from 'src/app/service/dog.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-show-dogs',
  templateUrl: './admin-show-dogs.component.html',
  styleUrls: ['./admin-show-dogs.component.css']
})
export class AdminShowDogsComponent {
  dogs: DogModel[] = []
  users: User[] = [];
  userType: string;


  constructor(private dogService: Dogservice, private userService: UserService) {
    this.userType = '';
   }
  ngOnInit(): void {
    this.userType = localStorage.getItem('userType') as string;
    this.dogService.getAllDogs().subscribe((data: DogModel[]) => { this.dogs = data });
    this.userService.getAllUsers().subscribe((data2: User[]) => { this.users = data2 });

  }

  delete(dog: DogModel): void {
    this.dogs = this.dogs.filter(x => x !== dog);
    this.dogService.deleteDog(dog.id).subscribe();
  }

  localDogId(dog: DogModel): void{
    localStorage.setItem('dogName', dog.name.toString())
    localStorage.setItem('dogId', dog.id.toString())
  }

  getDogImage(dogName: string): string {
    // Split the dogName using ':'
    const nameParts = dogName.split(':');
  
    // Check if there are at least two parts after splitting
    if (nameParts.length >= 2) {
      // Split the second part using '-'
      const numberParts = nameParts[1].split('-');
  
      // Check if there are at least two parts after the second split
      if (numberParts.length >= 2) {
        // Extract the id
        const number = numberParts[0];
        
        // Find the dog object that matches the extracted number
        const matchingDog = this.dogs.find(dog => dog.id.toString() === number);
  
        // Check if a matching dog was found and return its image URL
        return matchingDog ? matchingDog.imgURL : '';
      }
    }
  
    // If the format doesn't match or there's an issue, return a default value or handle it as needed
    return ''; // You can provide a default value or handle it differently
  }
  

}
