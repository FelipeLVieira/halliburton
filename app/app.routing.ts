import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {EmployeeComponent} from './employees/employee.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: EmployeeComponent},
            {path: '**', redirectTo: '', pathMatch: 'full'}
        ], {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}