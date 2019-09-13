import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: [`
    em {color: #e05c65; float: right}
    `]
})

export class LoginComponent {
    password: any
    userName: any
    mouseOverLogin: boolean

    constructor(private authService: AuthService,
        private router: Router) {

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName,
            formValues.password)
        this.router.navigate(['events'])
    }
    cancel() {
        this.router.navigate(['events'])
    }
}