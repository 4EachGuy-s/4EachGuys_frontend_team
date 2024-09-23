import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login/login.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    // Data de formulario
    loginForm: FormGroup;

    constructor(
        private loginService: LoginService,
        private formBuilder: FormBuilder
    ) {
        // Construir el formulario
        this.loginForm = formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    // Evento de ingreso o envío de formulario
    onSubmit() {
        if (this.loginForm.valid) {
            // Extraer data del formulario
            const data = this.loginForm.value;
            console.log("objeto para JWTRequest: ", data);

            // Usar el servicio de login
            this.loginService.ingresar(data);
        }
    }
}
