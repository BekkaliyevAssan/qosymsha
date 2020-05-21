import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url = "assets/data/faculty.json"
  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get(this.url)
  }
}
