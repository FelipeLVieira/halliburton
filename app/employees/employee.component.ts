import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';
import {clone} from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'employee.template.html'
})

export class EmployeeComponent implements OnInit {
    employees: Employee[];
    filteredEmployees: Employee[];
    employeeForm: boolean = false;
    editEmployeeForm: boolean = false;
    isNewForm: boolean;
    newEmployee: any = {};
    editedEmployee: any = {};
    filter: any = { name:"", role:"", company:"", boardDate:""};

    constructor(private _employeeService: EmployeeService) {
    }

    ngOnInit() {
        this.getEmployees();
    }

    getEmployees() {
        this.employees = this._employeeService.getEmployeesFromData();
        this.filteredEmployees = this._employeeService.getEmployeesFromData();
    }

    showEditEmployeeForm(employee: Employee) {
        if (!employee) {
            this.employeeForm = false;
            return;
        }
        this.editEmployeeForm = true;
        this.editedEmployee = clone(employee);
    }

    showAddEmployeeForm() {
        if (this.employees.length) {
            this.newEmployee = {};
        }
        this.employeeForm = true;
        this.isNewForm = true;
    }

    saveEmployee(employee: Employee) {
        if (this.isNewForm) {
            this._employeeService.addEmployee(employee);
        }
        this.employeeForm = false;
    }

    removeEmployee(employee: Employee) {
        this._employeeService.deleteEmployee(employee);
    }

    updateEmployee() {
        this._employeeService.updateEmployee(this.editedEmployee);
        this.editEmployeeForm = false;
        this.editedEmployee = {};
    }

    cancelNewEmployee() {
        this.newEmployee = {};
        this.employeeForm = false;
    }

    cancelEdits() {
        this.editedEmployee = {};
        this.editEmployeeForm = false;
    }

    filterEmployees(employeeFilter : Employee){
        this.filteredEmployees = this._employeeService.filterEmployees(employeeFilter)
    }

    clearFilter(){
	    this.filter = { name:"", role:"", company:"", boardDate:""};
    }

}
