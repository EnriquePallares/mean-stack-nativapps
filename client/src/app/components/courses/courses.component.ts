import { Component, OnInit } from "@angular/core";
import { CourseService } from "../../services/course.service";
import { NgForm } from "@angular/forms";
import { Course } from "../../models/course";
import { AuthService } from "../../services/auth.service";

declare var $: any;
declare var M: any;

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    $(".datepicker").datepicker();
    $(".timepicker").timepicker();
    this.getCourses();
    this.auth.canActivate();
  }

  addCourse(form: NgForm) {
    let element = $(".datepicker");
    let timePicker = $(".timepicker");
    let dateIni = M.Datepicker.getInstance(element[0]);
    let dateFin = M.Datepicker.getInstance(element[1]);

    form.value.dateIni = dateIni.toString();
    form.value.dateFin = dateFin.toString();
    form.value.startTime = timePicker[0].value;
    form.value.endTime = timePicker[1].value;

    if (form.value._id) {
      this.courseService.putCourse(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: "Course Successfully Updated!" });
        this.getCourses();
      });
    } else {
      this.courseService.postCourse(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: "Course Successfully Saved!" });
        this.getCourses();
      });
    }
  }

  getCourses() {
    this.courseService.getCourses().subscribe((data) => {
      this.courseService.coursesArray = data as Course[];
    });
  }

  editCourse(course: Course) {
    this.courseService.selectedCourse = course;
  }

  deleteCourse(_id: string) {
    if (confirm("Are you sure want to delete it?")) {
      this.courseService.deleteCourse(_id).subscribe((res) => {
        M.toast({ html: "Course Successfully Deleted!" });
        this.getCourses();
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.courseService.selectedCourse = new Course();
    }
  }
}
