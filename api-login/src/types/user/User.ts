enum RoleName {
    ADMIN = 'ADMIN',
    USER = 'USER'
}


interface User {
    id?: number;
    email: string;
    name: string | null;
    password: string;
    role?: RoleName;
}

export { User };