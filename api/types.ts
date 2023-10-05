export interface Error {
    statusCode?: number;
    message: string;
}

export interface IUser {
    username: string;
    email: string;
    password: string;
}