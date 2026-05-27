import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private baseUrl = `${environment.apiUrl}/Courses`;
  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }
}
