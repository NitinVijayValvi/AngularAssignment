import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { MenuComponent } from './menu/menu.component';
import { PrintobjdetailComponent } from './printobjdetail/printobjdetail.component';
import { SeparatebycommaComponent } from './separatebycomma/separatebycomma.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationformComponent,
    MenuComponent,
    PrintobjdetailComponent,
    SeparatebycommaComponent,
    EmployeeinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
