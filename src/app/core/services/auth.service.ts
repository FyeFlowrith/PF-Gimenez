import { Injectable } from "@angular/core";
import { AuthData } from "../interfaces/auth.interfaces";
import { User } from "../interfaces/user.interfaces";
import { Observable, of, throwError } from "rxjs";

const TEST_USER: User = {
    id: 1,
    firstName: 'Usuario',
    lastName: 'Admin',
    email: 'usu-admin@test.com',
    password: 'pass1234',
    createdAt: new Date(),
}


@Injectable({ providedIn: 'root' })
export class AuthService {


    login(data: AuthData): Observable<User> {
        if (data.email != TEST_USER.email || data.password != TEST_USER.password){
            return throwError(() => new Error('Los datos son inválidos'))
        }

        return of(TEST_USER)
    }
}