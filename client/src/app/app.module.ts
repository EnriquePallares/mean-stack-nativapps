import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { RegisterComponent } from './components/register/register.component';

import { StudentService } from './services/student.service';
import { CourseService } from './services/course.service';
import { LoginService } from './services/login.service';
import { AuthService } from './services/auth.service';

import { RoutingModule } from './routing/routing.module';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CoursesComponent,
    LoginComponent,
    DashboardComponent,
    NavegacionComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService,
    CourseService,
    LoginService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
