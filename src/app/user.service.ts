import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    getUsers()
    {
        return [
            {
                firstname: 'Felice',
                lastname: 'Avitto',
                email: 'felice0091@gmail.com',
                fiscalcode: 'VTTFLC91T03E223L',
                phone: '1234567890',
                province: 'Bari',
                age: 31
            },
            {
                firstname: 'Felice1',
                lastname: 'Avitto1',
                email: 'felice0091@gmail.com',
                fiscalcode: 'VTTFLC91T03E223L',
                phone: '1234567890',
                province: 'Bari',
                age: 31
            },
            {
                firstname: 'Felice2',
                lastname: 'Avitto2',
                email: 'felice0091@gmail.com',
                fiscalcode: 'VTTFLC91T03E223L',
                phone: '1234567890',
                province: 'Bari',
                age: 31
            },
            {
                firstname: 'Felice3',
                lastname: 'Avitto3',
                email: 'felice0091@gmail.com',
                fiscalcode: 'VTTFLC91T03E223L',
                phone: '1234567890',
                province: 'Bari',
                age: 31
            }
        ]
    }
}