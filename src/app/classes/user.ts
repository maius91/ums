import { UserInterface } from './../interfaces/user';

export class User implements UserInterface {
    id: number = 0;
    firstname: string = "";
    lastname: string = "";
    email: string = "";
    fiscalcode: string = "";
    province: string = "";
    phone: string = "";
    age: number = 0;
}