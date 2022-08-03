import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students?: Student[];

  constructor(
    private student_service: StudentService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.retrieve_students();
  }

  //Get All Students-----------------------------------------------------
  retrieve_students(): void {
    //Subscribe to the get_students() from the StudentService
    this.student_service.get_students().subscribe((data) => {
      this.students = data;
      console.log(data);
    });
  }

  // Remove A Student-----------------------------------------------------
  remove_student(data: any) {
    this.student_service.delete_student(data._id).subscribe((data) => {
      console.log(data);
      return this.retrieve_students();
    });
  }

  // ======================================================================================================
}
