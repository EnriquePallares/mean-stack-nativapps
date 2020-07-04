import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { StudentService } from "../../services/student.service";
import { CourseService } from "../../services/course.service";
import { NgForm } from "@angular/forms";
import { Student } from "../../models/student";
import { Course } from "../../models/course";

declare var $: any;
declare var M: any;

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
})
export class StudentsComponent implements OnInit {
  courses: Course[];

  constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.canActivate();
    this.getCourses();
    this.getStudents();
    setTimeout(() => {
      $("select").formSelect();
    }, 500);
  }

  addStudent(form: NgForm) {
    if (form.value._id) {
      this.studentService.putStudent(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: "Student Successfully Updated!" });
        this.getStudents();
      });
    } else {
      this.studentService.postStudent(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: "Student Successfully Saved!" });
        this.getStudents();
      });
    }
  }

  getStudents() {
    this.studentService.getStudents().subscribe((data) => {
      this.studentService.studentsArray = data as Student[];
    });
  }

  editStudent(student: Student) {
    this.studentService.selectedStudent = student;
  }

  deleteStudent(_id: string) {
    if (confirm("Are you sure want to delete it?")) {
      this.studentService.deleteStudent(_id).subscribe((res) => {
        M.toast({ html: "Student Successfully Deleted!" });
        this.getStudents();
      });
    }
  }

  getCourses() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.studentService.selectedStudent = new Student();
    }
  }
}
