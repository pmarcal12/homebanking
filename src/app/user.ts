import { Movements } from "./movements";

export interface User
{
    name: string,
    // email: string,
    password: string,
    userID: number,
    userBalance: number
    userMovs: Movements[]
}

export const users: User[]= [
    {
        name: 'admin',
        password: 'admin',
        userID: 0,
        userBalance: 100,
        userMovs: []
    }
];