import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AllEmployeesService } from '../all-employees.service'; // Import the service

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  public employeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    company: new FormControl(),
    role: new FormControl(),
    package: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),
    year: new FormControl(),
    percentage: new FormControl(),
    hikes: new FormArray([]),
    workMode: new FormControl(),
  });

  constructor(private _employeeService: AllEmployeesService) { }

  // Getter for hikes FormArray
  get hikesFormArray() {
    return this.employeeForm.get('hikes') as FormArray;
  }

  // Add a new hike entry
  hikes() {
    this.hikesFormArray.push(
      new FormGroup({
        year: new FormControl(),
        percentage: new FormControl(),
      })
    );
  }

  // Function to submit form data
  submit() {
    if (this.employeeForm.invalid) {
      alert('Please fill out the form correctly');
      return;
    }

    const formData = this.employeeForm.value;
    console.log(formData); // Optional: log form data before posting

    // Call service method to create a new employee
    this._employeeService.createemployees(formData).subscribe(
      (response) => {
        console.log('Employee created successfully', response);
        alert('Employee created successfully!');
        this.employeeForm.reset(); // Reset the form after submission
      },
      (error) => {
        console.error('Error creating employee', error);
        alert('There was an error creating the employee. Please try again.');
      }
    );
  }
}
