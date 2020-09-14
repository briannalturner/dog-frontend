import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs/dogs.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _dogsService
  dogs: Object[];

  constructor(dogsService: DogsService) { 
    this._dogsService = dogsService
  }

  ngOnInit(): void {
    this._dogsService.getDogs().subscribe({
      next: (dogs) => {
        // console.log(dogs)
        this.dogs = dogs
      }
    })
  }

}
