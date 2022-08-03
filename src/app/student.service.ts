import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Student } from './models/student.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  private API = 'http://localhost:3000/api';
  // private HTTP_HEADER = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };
 

  //Get All Students--------------------------------------
  get_students(): Observable<Student[]> {
    return this.http.get<Student[]>(API).pipe(
      tap((students_list) =>
        console.log(`students list = ${JSON.stringify(students_list)}`)
      ),
      catchError((err) => of([]))
    );
  }

  //Create Student--------------------------------------
  create(student: any): Observable<any> {
    return this.http.post(`${API}/create`, student);
  }

  //Delete student--------------------------------------
  delete_student(id: any) {
    return this.http.delete(`${API}/remove_student/` + id);
  }

  //Edit Student--------------------------------------
  get_student_by_id(id: any): Observable<any> {
    return this.http.get(`${API}/student/` + id);
  }

  //Update Student --------------------------------------
  update(id:any, data:any): Observable<any> {
    return this.http.patch(`${API}/update/` + id, data)
  }
  
  // ==========================================================================================================
  // update(id:any, data:any): Observable<any> {
  //   return this.http.patch<Student>(`${API}/update`+id, this.HTTP_HEADER)
  // }
  
}

