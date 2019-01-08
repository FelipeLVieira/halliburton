import {Injectable} from '@angular/core';
import {Employee} from './employee';
import {EMPLOYEES} from './employee-data';
import {findIndex} from 'lodash';
import {on} from "cluster";

@Injectable()
export class EmployeeService {
    private employees = EMPLOYEES;
    private filteredEmployees = EMPLOYEES;

    getEmployeesFromData(): Employee[] {
        return this.employees;
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    updateEmployee(employee: Employee) {
        let index = findIndex(this.employees, (p: Employee) => {
            return p.id === employee.id;
        });
        this.employees[index] = employee;
    }

    deleteEmployee(employee: Employee) {
        this.employees.splice(this.employees.indexOf(employee), 1);
    }

    filterEmployees(employeeFilter: Employee) {
        if (employeeFilter.name == "" && employeeFilter.role == "" && employeeFilter.company == ""){
            return this.employees;
        }

        this.filteredEmployees = [];

        console.log(employeeFilter);

        for(let employee of this.employees){

            if (employeeFilter.name != ""){
                if (employee.name.toLowerCase().indexOf(employeeFilter.name.toLowerCase()) > -1){
                    this.filteredEmployees.push(employee);
                    continue;
                }
            }

            if (employeeFilter.role != ""){
                if (employee.role.toLowerCase().indexOf(employeeFilter.role.toLowerCase()) > -1){
                    this.filteredEmployees.push(employee);
                    continue;
                }
            }

            if (employeeFilter.company != ""){
                if (employee.company.toLowerCase().indexOf(employeeFilter.company.toLowerCase()) > -1){
                    this.filteredEmployees.push(employee);
                }
            }
        }

        return this.filteredEmployees;
    }
}