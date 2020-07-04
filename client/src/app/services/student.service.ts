import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Student } from '../models/student';

@Injectable()
export class StudentService {

  readonly URL_API = '/api/students'
  studentsArray: Student[];
  selectedStudent: Student;
  headers = new Headers()
  constructor(private http: Http) {
    this.selectedStudent = new Student();
    this.headers.append("Content-Type", "application/json")
    this.headers.append("token", JSON.parse(localStorage.getItem("token")))
  }

  getStudents() {
    return this.http.get(this.URL_API, { headers: this.headers })
     .map((response: Response) => response.json());
  }

  postStudent(Student: Student) {
    return this.http.post(this.URL_API, Student, { headers: this.headers });
  }

  putStudent(student: Student) {
    return this.http.put(this.URL_API + `/${student._id}`, student, { headers: this.headers })
      .map((response: Response) => response.json());
  }

  deleteStudent(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`, { headers: this.headers });
  }
}
