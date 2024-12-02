import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
    // canActivate:[AuthenticationGuard],
    {path:'home',component:HomeComponent},
    {path:'create-employee',component:CreateEmployeeComponent},
    {path:'all-employees',component:AllEmployeesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
