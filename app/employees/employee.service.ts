import {Injectable} from '@angular/core';
import {Employee} from './employee';
import {EMPLOYEES} from './employee-data';
import {findIndex} from 'lodash';

@Injectable()
export class EmployeeService {
    private pItems = EMPLOYEES;

    getEmployeesFromData(): Employee[] {
        console.log(this.pItems);
        return this.pItems
    }

    addEmployee(employee: Employee) {
        this.pItems.push(employee);
        console.log(this.pItems);
    }

    updateEmployee(employee: Employee) {
        let index = findIndex(this.pItems, (p: Employee) => {
            return p.id === employee.id;
        });
        this.pItems[index] = employee;
    }

    deleteEmployee(employee: Employee) {
        this.pItems.splice(this.pItems.indexOf(employee), 1);
        console.log(this.pItems);
    }

}