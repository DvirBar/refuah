export interface User {
    firstName: string;
    lastName: string;
    email: string;
}

export interface AuthAtom {
    isAuthenticated: boolean;
    user: User | null;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData extends LoginData {
    firstName: string;
    lastName: string;
    username: string;
}

export interface AuthActionsHookReturn {
    login: (data: LoginData) => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    resetPassword: (password: string, token: string) => Promise<void>;
}
