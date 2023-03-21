import { User } from './../interfaces/user';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    users:User[] = [
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

    getUsers()
    {
        return this.users;
    }

    deleteUser(user:User)
    {
        const index = this.users.indexOf(user);
        if(index > -1)
        {
            this.users.splice(index,1);
        }
    }

    updateUser(user:User)
    {
        const index = this.users.indexOf(user);
        if(index > -1)
        {
            this.users.splice(index,1);
        }
    }
}