import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Course } from '../models/course';

@Injectable()
export class CourseService {

  readonly URL_API = '/api/courses'
  coursesArray: Course[];
  selectedCourse: Course;
  headers = new Headers()
  constructor(private http: Http) {
    this.selectedCourse = new Course();
    this.headers.append("Content-Type", "application/json")
    this.headers.append("token", JSON.parse(localStorage.getItem("token")))
  }

  getCourses() {
    return this.http.get(this.URL_API,{ headers: this.headers})
      .map((response: Response) => response.json());
  }

  postCourse(Course: Course) {
    return this.http.post(this.URL_API, Course,{ headers: this.headers });
  }

  putCourse(course: Course) {
    return this.http.put(this.URL_API + `/${course._id}`, course,{ headers: this.headers })
      .map((response: Response) => response.json());
  }

  deleteCourse(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`,{ headers: this.headers });
  }

}
