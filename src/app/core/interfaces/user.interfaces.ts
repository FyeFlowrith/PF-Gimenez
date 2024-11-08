export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    token: string;
}

export interface UserDialogData {
    editingUser?: User;
}