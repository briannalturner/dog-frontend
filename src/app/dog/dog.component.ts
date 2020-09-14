import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DogsService } from '../dogs/dogs.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dog: Object;

  private _dogsService;
  constructor(private route: ActivatedRoute, dogsService: DogsService, private router: Router) { 
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

  onClick(): void {
    console.log('clicked')
    this.router.navigate(['/dogs'])
  }

}
