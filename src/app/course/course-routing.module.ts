import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course.component';

const courseRoutes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CourseListComponent
      }, {
        path: ':id',
        component: CourseDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(courseRoutes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
