import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { PrintobjdetailComponent } from './printobjdetail/printobjdetail.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { SeparatebycommaComponent } from './separatebycomma/separatebycomma.component';

const routes: Routes = [
  {path:"registrationform",component:RegistrationformComponent},
  {path:"printobjdetail",component:PrintobjdetailComponent},
  {path:"separatebycomma",component:SeparatebycommaComponent},
  {path:"employeeinfo",component:EmployeeinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
