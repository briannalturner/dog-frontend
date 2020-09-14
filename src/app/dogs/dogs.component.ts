import { Component, OnInit } from '@angular/core';
import { DogsService } from './dogs.service'

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs: Object[];

  private _dogsService;
  constructor(dogsService: DogsService) { 
    this._dogsService = dogsService
  }

  ngOnInit(): void {
    this._dogsService.getDogs().subscribe({
      next: dogs => {
        this.dogs = dogs
        console.log(dogs)
      }
    })
  }

}
