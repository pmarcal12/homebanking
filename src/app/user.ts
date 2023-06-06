export interface User
{
    name: string,
    // email: string,
    password: string,
    userID: number
}

export const users = [
    {
        name: 'admin',
        password: 'admin',
        userID: 0
    }
];