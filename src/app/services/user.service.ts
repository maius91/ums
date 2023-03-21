import { User } from './../classes/user';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    users:User[] = [
        {
            id: 1,
            firstname: 'Felice',
            lastname: 'Avitto',
            email: 'felice0091@gmail.com',
            fiscalcode: 'VTTFLC91T03E223L',
            phone: '1234567890',
            province: 'Bari',
            age: 31
        },
        {
            id: 2,
            firstname: 'Felice1',
            lastname: 'Avitto1',
            email: 'felice0091@gmail.com',
            fiscalcode: 'VTTFLC91T03E223L',
            phone: '1234567890',
            province: 'Bari',
            age: 31
        },
        {
            id: 3,
            firstname: 'Felice2',
            lastname: 'Avitto2',
            email: 'felice0091@gmail.com',
            fiscalcode: 'VTTFLC91T03E223L',
            phone: '1234567890',
            province: 'Bari',
            age: 31
        },
        {
            id: 4,
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
        const index = this.users.findIndex((v) => v.id == user.id);
        if(index !== -1)
        {
            this.users[index] = user;
        }
    }

    createUser(user:User)
    {
        this.users.splice(0,0,user);
    }
}