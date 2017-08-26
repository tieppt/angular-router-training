import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
// import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    AuthModule
  ],
  declarations: [CourseComponent, CourseListComponent, CourseDetailComponent],
  providers: []
})
export class CourseModule { }
