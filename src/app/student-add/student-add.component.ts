import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent implements OnInit {

  students!: Student[];

  constructor(private student_service: StudentService, private routes: Router) {}

  ngOnInit(): void {
  }

    new_student(
    name: string,
    email: string,
    cohort: string,
    phone_number: string,
  ): void{
    name = name.trim();
    email = email.trim();
    cohort = cohort.trim();

    if(Number.isNaN(Number(phone_number)) || !name || !email || !cohort || Number(phone_number) <= 0) {
      alert('Phone must be a number.');
    }

    const new_student:Student = new Student();
    new_student.name = name;
    new_student.email = email;
    new_student.cohort = cohort;
    new_student.phone_number = phone_number;

    this.student_service.create(new_student)
    .subscribe((data) => {
        this.students.push(data);
        console.log(data);
        // (<any>this.routes).navigate(['/students']);
      }
    );
  }
}

