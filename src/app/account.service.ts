import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  API = 'http://localhost:3000/api/account';

  constructor(private http: HttpClient) {}

  create_account(data: Account): Observable<any> {
    return this.http.post(this.API + '/acc_create', data);
  }
}

export interface Account {
  student_id: '';
  account_number: '';
  bank: '';
  branch: '';
  account_type: '';
  status: '';
}
