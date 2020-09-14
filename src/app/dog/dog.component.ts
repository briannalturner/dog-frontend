import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DogsService } from '../dogs/dogs.service'

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dog: Object;

  private _dogsService;
  constructor(private route: ActivatedRoute, dogsService: DogsService) { 
    this._dogsService = dogsService
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this._dogsService.getDog(id).subscribe({
      next: dog => {
        this.dog = dog
        console.log(dog)
      }
    })
  }

}
