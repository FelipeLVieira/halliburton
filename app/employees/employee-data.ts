import {Employee} from './employee';

export const EMPLOYEES: Employee[] = [{
    id: 1,
    name: 'Fulano',
    role: 'Soldador',
    company: 'Petrobras',
    boardDate: new Date(2019,1,1),
    landDate: new Date(2019,2,1)
}, {
    id: 2,
    name: 'Beltrano',
    role: 'Operador',
    company: 'Halliburton',
    boardDate: new Date(2019,5,30),
    landDate: new Date(2019,10,15)
}, {
    id: 3,
    name: 'Ciclano',
    role: 'Piloto',
    company: 'Halliburton',
    boardDate: new Date(2019,3,1),
    landDate: new Date(2019,4,1)
}]