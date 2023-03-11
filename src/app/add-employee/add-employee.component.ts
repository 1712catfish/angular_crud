import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Employee, EmployeeService} from "../../service/employee";
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  addEmployeeForm: employeeForm = new employeeForm();
  @ViewChild("employeeForm")
  employeeForm!: NgForm;
  isSubmitted: boolean = false;
  employees: any

  ngOnInit(): void {
    this.employees = this.employeeService.employeeList$

  }

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
  ) { }

  AddEmployee(isValid: any) {
    this.isSubmitted = true;
    if(isValid){
      const formValue = this.employeeForm.value;



      this.employees.push(new Employee(
        this.employees.length,
        formValue.firstname,
        formValue.lastname,
        formValue.email,
        formValue.address,
        formValue.phone
      ))

      this.employeeService.setEmployeeList(this.employees);

      // const formJson = JSON.stringify(formValue);
      // console.log(formJson);
      setTimeout(() => {
        this.router.navigate(['/Home']);
      }, 500);
    }
  }
}

export class employeeForm {
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  address: string = "";
  phone: string = "";
}
