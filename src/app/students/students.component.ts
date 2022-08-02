import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students?: Student[]; //array from the model imported above
  // private API = 'http://localhost:3000/api/';
  // private http!:HttpClient;

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

  //Remove A Student (supposed to refresh page but is defective)--------
  remove_student(datas: any) {
    this.student_service.delete_student(datas._id).subscribe((data) => {
      console.log(data);
      this.students = this.students?.filter((u: any) => {
        u !== datas
      });
    });
  }
  
  //Remove A Student (Kira version; gives an error)--------
  // remove_student(data: any) {
  //   this.student_service.delete_student(data._id).subscribe((data) => {
  //     console.log(data);
  //     this.students = this.students?.filter((val) => data._id !== val._id)
  //     })
  //   };
  // }
  
  //Remove A Student (works but have to manually refresh page to see change)--
  // remove_student(data: any) {
  //   this.student_service.delete_student(data._id).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  // ======================================================================================================

  //Edit Student-----------------------------------------------------
  // edit_student(_id: string): void {
  //   this.routes.navigate([`student_edit/${_id}`]);
  //   console.log(_id);
  // }

  //Delete student-----------------------------------------------------
  // remove_student(_id: string): void {
  //   this.student_service.delete_student(_id).subscribe({
  //     next: () => {
  //       console.log('Student has been deleted');
  //     },
  //     error: () => {
  //       console.log('Error');
  //     },
  //     complete: () => {
  //       this.retrieve_students();
  //     },
  //   });
  // }

  // remove_student(data: any) {
  //   this.student_service.delete_student(data._id).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
};
