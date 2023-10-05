export interface IInitialAuthState {
    user: IUser | null;
    loading: boolean;
    hasErrors: boolean;
    error: string | null | unknown;
}

export interface IUser {
    username: string;
    email: string;
    password: string;
}