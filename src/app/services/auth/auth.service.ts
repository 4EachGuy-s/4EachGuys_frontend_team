import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    // Url validar token
    private url: string = 'http://localhost:4000/api/v1/auth/validar';
    // Url logout
    private urlLogout: string = 'http://localhost:4000/api/v1/auth/logout';

    constructor(private http: HttpClient) {}

    validar(): Observable<boolean> {
        return this.http.get<boolean>(this.url, { withCredentials: true });
    }

    logout() {
        this.http.get(this.urlLogout, {withCredentials: true}).subscribe({
            next: response => {
                console.log("logout response: ", response);
            },
            error: err => {
                console.error("Error logout", err);

            }
        })
    }

}
