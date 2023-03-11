import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Employee, EmployeeService} from "../../service/employee";

export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  employees = [
    new Employee(1,'lionel', 'messi1', 'lionelmessi@gmail.com', '', ''),
    new Employee(2,'lionel', 'messi2', 'lionelmessi@gmail.com', '', ''),
    new Employee(3,'lionel', 'messi3', 'lionelmessi@gmail.com', '', ''),
  ]
  selectedEmployee = this.employees[0]

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private employeeService: EmployeeService,
  ) {}



  ngOnInit(): void {
    this.employeeService.selectedEmployee$.subscribe((value: Employee) => {
      this.selectedEmployee = value;
    });
    this.employeeService.setEmployeeList(this.employees);
  }

  redirectAddEmployee = () => {
    this.router.navigate(['/AddEmployee']);
  };

  deleteEmployeeConfirmation(employee: any) {
    this.modalService.open(NgModalConfirm,
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then(() => {
        this.deleteEmployee(employee);
      },
      () => {});
  }

  private deleteEmployee(employee: any) {

  }
}
