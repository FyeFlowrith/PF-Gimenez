import { Injectable } from "@angular/core";
import { AuthData } from "../interfaces/auth.interfaces";
import { User } from "../interfaces/user.interfaces";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { Router } from "@angular/router";

const TEST_USER: User = {
    id: 1,
    firstName: 'Usuario',
    lastName: 'Admin',
    email: 'usu-admin@test.com',
    password: 'pass1234',
    createdAt: new Date(),
    token: 'klrgjhlseo495340twlekrghwrgw123',
}


@Injectable({ providedIn: 'root' })
export class AuthService {
    private _authUser$ = new BehaviorSubject<null | User>(null);
    public authUser$ = this._authUser$.asObservable();

    constructor(private router: Router){}

    login(data: AuthData): Observable<User> {
        if (data.email != TEST_USER.email || data.password != TEST_USER.password){
            return throwError(() => new Error('Los datos son inválidos'))
        }
        this._authUser$.next(TEST_USER);
        localStorage.setItem('token', TEST_USER.token);
        return of(TEST_USER);
    }

    logout() {
        this._authUser$.next(null);
        localStorage.removeItem('token');
        this.router.navigate(['auth', 'login']);
    }

    verifyToken(): Observable<boolean> {
        const isValid = localStorage.getItem('token') === TEST_USER.token;

        if (isValid) {
            this._authUser$.next(TEST_USER);
        } else {
            this._authUser$.next(null);
        }
        return of(isValid);
    }
}