import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../components/login/login.component';
import { StudentsComponent } from '../components/students/students.component';
import { RegisterComponent } from '../components/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'users/signup', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/student', component: StudentsComponent },
  { path: 'dashboard/course', component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
