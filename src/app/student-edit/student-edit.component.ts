import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit {
  student: any = [];
  details: any = [];

  constructor(
    private route: Router,
    private student_service: StudentService,
    private active_route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.edit_student(this.active_route.snapshot.paramMap.get('id'));
  }

  edit_student(id: any) {
    this.student_service.get_student_by_id(id).subscribe((data: any) => {
      this.details = data;
      this.student = {
        id: this.details._id,
        name: this.details.name,
        email: this.details.email,
        cohort: this.details.cohort,
        phone_number: this.details.phone_number,
      };
      console.error();
      console.log(this.details);
    });
  }

  update_student(_id: any) {
    const data = {
      _id: this.details._id,
      name: this.student.name,
      email: this.student.email,
      cohort: this.student.cohort,
      phone_number: this.student.phone_number,
    };
    this.student_service.update(_id, data).subscribe(() => {
      this.route.navigate(['/students']);
      console.error();
      console.log(data);
    });
  }
}
