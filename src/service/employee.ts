import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Employee {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  phone: string;
  id: any;

  constructor(id: number, firstname: string, lastname: string, email: string, address: string, phone: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.id = id;
  }
}

@Injectable()
export class EmployeeService {
  private employee$ = new BehaviorSubject<Employee>(
    new Employee(0, 'lionel', 'messi', 'lionelmessi@gmail.com', '', ''),
  );
  selectedEmployee$ = this.employee$.asObservable();
  private employeeListBus$ = new BehaviorSubject<Employee[]>([]);
  employeeList$ = this.employeeListBus$.asObservable();
  constructor() {}

  setEmployee(employee: Employee) {
    this.employee$.next(employee);
  }

  setEmployeeList(employees: Employee[]) {
    this.employeeListBus$.next(employees);
  }

}
