export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
}

export interface StudentDialogData {
    editingStudent?: Student
}