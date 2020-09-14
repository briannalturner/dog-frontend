import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DogsService {

  private dogsUrl: string = 'http://localhost:3000/dogs';
  constructor(private http: HttpClient) { }

  getDogs(): Observable<Object[]> {
    return this.http.get<Object[]>(this.dogsUrl)
  }

  getDog(id: number | unknown) {
    return this.http.get<Object>(this.dogsUrl + `/${id}`)
  }
}
