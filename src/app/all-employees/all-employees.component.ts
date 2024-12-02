
import { Component } from '@angular/core';
import { AllEmployeesService } from '../all-employees.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {

  employees:any = [];
  term:string = "";

  limit:number = 0;
  page:number = 0;

  column:string = "";
  order:string = "";

  constructor(private _employeeService:AllEmployeesService){


    _employeeService.getemployees().subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

  delete(id:string){
    this._employeeService.deleteemployee(id).subscribe(
      (data:any)=>{
        alert("delete successfully!!");
        location.reload();
      },
      (err:any)=>{
        alert("internal error");
      }
    )
  }

  filter(){
    this._employeeService.getfilteredemployee(this.term).subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("");
      }
    )
  }

  sort(){
    this._employeeService.getsortedemployee(this.column,this.order).subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("internal error");
      }
    )
  }

  pagination(){
    this._employeeService.getpagedemployee(this.limit, this.page).subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("internal error");
      }
    )
  }

}
