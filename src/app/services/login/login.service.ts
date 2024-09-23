import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginResponseInterface } from '../../models/loginResponse/loginResponse.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    // Url endpoint login
    private url: string = 'http://localhost:4000/api/v1/auth/login';

    // Se importa HttpClient para hacer las peticiones al servidor
    constructor(
        private http: HttpClient,
        private router: Router,
        private authService: AuthService
    ) {}

    // Realizar envío de datos de ingreso para iniciar sesión
    ingresar(data: Object) {
        console.log(data);

        this.http
            .post<loginResponseInterface>(this.url, data, {
                withCredentials: true,
            })
            .subscribe({
                next: (response) => {
                    console.log(response);
                    if (response.status === 200) {
                        alert(response.message)
                        this.router.navigate(['/dashboard']);
                    }
                },
                error: (err) => {
                    this.authService.logout();
                    this.router.navigate(["/login"])
                    console.error(err.error.message);
                },
            });
    }
}
