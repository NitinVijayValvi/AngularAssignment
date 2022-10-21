import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators, NgForm } from '@angular/forms'
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

submitted  =false
user = {

  firstname:'',
  lastname:'',
  email:'',
  password:'',
  gender:'',
  city:'',
  phoneno:''

}


@ViewChild('f') UserForm!:NgForm;
firstname: any;
lastname: any;
email: any;
password: any;
gender: any;
city: any;
phoneno: any;
  constructor() {

  }


  ngOnInit(): void {
  }
  onformSubmit(){
    console.log(this.UserForm);
  }


submituser(){
  this.submitted= true;
  this.user.firstname =this.UserForm.value.data.firstname;
  this.user.lastname =this.UserForm.value.data.lastname;
  this.user.email =this.UserForm.value.data.email;
  this.user.password =this.UserForm.value.data.password;
  this.user.gender =this.UserForm.value.data.gender;
  this.user.city =this.UserForm.value.data.city;
  this.user.phoneno =this.UserForm.value.data.phoneno;

  this.UserForm.reset();
}

}
