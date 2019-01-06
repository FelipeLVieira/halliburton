import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employees/employee.component';
import {NavbarComponent} from './nav/nav.component';

import {EmployeeService} from './employees/employee.service';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [AppComponent,
        EmployeeComponent,
        NavbarComponent
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})

export class AppModule {
}