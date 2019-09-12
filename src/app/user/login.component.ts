import { Component } from '@angular/core';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    password: any
    userName: any
    login(formValues) {
        console.log(formValues)
    }
}