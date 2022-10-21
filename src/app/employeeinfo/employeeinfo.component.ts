import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})
export class EmployeeinfoComponent implements OnInit {
  employeeinfo!:FormGroup
  listEmp!:any
  constructor(private fb :FormBuilder) { 

    this.listEmp=[];



    this.employeeinfo = this.fb.group({
      employeename: ['',Validators.required],
    employeeaddress:['',Validators.required],
    employeedepartment:['',Validators.required],
  })
  }

  submitdata(){
    this.listEmp.push(this.employeeinfo.value);
    this.employeeinfo.reset();
  }
  ngOnInit(): void {
  }

}
