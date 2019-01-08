import {Injectable} from '@angular/core';
import {Employee} from './employee';
import {EMPLOYEES} from './employee-data';
import {findIndex} from 'lodash';

@Injectable()
export class EmployeeService {
    private employees = EMPLOYEES;
    private filteredEmployees = EMPLOYEES;

    getEmployeesFromData(): Employee[] {
        return this.employees;
    }

    addEmployee(employee: Employee) {
        employee.boardDate = EmployeeService.parseDate(employee.boardDate);
        employee.landDate = EmployeeService.parseDate(employee.landDate);
        this.employees.push(employee);
    }

    updateEmployee(employee: Employee) {
        let index = findIndex(this.employees, (p: Employee) => {
            return p.id === employee.id;
        });
        employee.boardDate = EmployeeService.parseDate(employee.boardDate);
        employee.landDate = EmployeeService.parseDate(employee.landDate);
        this.employees[index] = employee;
    }

    deleteEmployee(employee: Employee) {
        this.employees.splice(this.employees.indexOf(employee), 1);
    }

    filterEmployees(employeeFilter: Employee) {
        if (employeeFilter.name == "" && employeeFilter.role == "" && employeeFilter.company == "" && !employeeFilter.boardDate){
            return this.employees;
        }

        employeeFilter.boardDate = EmployeeService.parseDate(employeeFilter.boardDate);

        this.filteredEmployees = [];

        for(let employee of this.employees){

            if (employee.name && employeeFilter.name){
                if (employee.name.toLowerCase().indexOf(employeeFilter.name.toLowerCase()) > -1){
                    this.filteredEmployees.push(employee);
                    continue;
                }
            }

            if (employee.role && employeeFilter.role){
                if (employee.role.toLowerCase().indexOf(employeeFilter.role.toLowerCase()) > -1){
                    this.filteredEmployees.push(employee);
                    continue;
                }
            }

            if (employee.company && employeeFilter.company){
                if (employee.company.toLowerCase().indexOf(employeeFilter.company.toLowerCase()) > -1){
                    this.filteredEmployees.push(employee);
                }
            }

            if (employee.boardDate && employeeFilter.boardDate) {
                if (employeeFilter.boardDate.getDate() == employee.boardDate.getDate()) {
                    this.filteredEmployees.push(employee);
                }
            }
        }

        return this.filteredEmployees;
    }

    static parseDate(value : any){
        if(value == "") return null;
        return new Date(value);
    }
}