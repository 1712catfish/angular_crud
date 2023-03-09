import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  employeeList: any[];

  constructor(
    private router: Router,
    private modalService: NgbModal,
    // private toastr: ToastrService,
  ) {
    this.employeeList = [];
  }

  ngOnInit(): void {

  }

  redirectAddEmployee = () => {
    this.router.navigate(['/user']);
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
