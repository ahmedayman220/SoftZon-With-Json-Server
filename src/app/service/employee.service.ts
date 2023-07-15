import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:3000/employees'; // Base URL for API endpoint

  constructor(private http: HttpClient) {}

  // Get all employees
  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // Get employee by ID
  getEmployeeById(empId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${empId}`);
  }

  // Add new employee
  addEmployee(employeeData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, employeeData);
  }

  // Edit existing employee
  editEmployee(empId: number,employeeData: any): Observable<any> {
    const url = `${this.baseUrl}/${empId}`;
    return this.http.put(url, employeeData);
  }

  // Delete employee by ID
  deleteEmployeeById(empId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${empId}`);
  }
}
