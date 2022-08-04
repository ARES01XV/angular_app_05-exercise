import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account, AccountService } from '../account.service';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.css'],
})
export class StudentAccountComponent implements OnInit {
  details: any = [];
  student: any = [];
  account: any = {
    student_id: '',
    account_number: '',
    bank: '',
    branch: '',
    account_type: '',
    status: '',
  };

  constructor(
    private account_service: AccountService,
    private route: Router,
    private active_route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.add_account(this.active_route.snapshot.paramMap.get('id'));
  }

  add_account(id: any) {
    const data = {
      student_id: id,
      account_number: this.account.account_number,
      bank: this.account.bank,
      branch: this.account.branch,
      account_type: this.account.account_type,
      status: this.account.status,
    };

    this.account_service.create_account(data).subscribe(() => {
      console.error();
      console.log(data);
      console.log('student ID' + data.student_id);
      console.log('student ID' + data.account_number);
    });
  }
}
