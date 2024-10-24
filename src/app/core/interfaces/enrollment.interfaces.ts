export interface Enrollment {
    id: number;
    studentId: number;
    courseId: number;
    enrollmentDate: Date;
    userId: number;
}

export interface EnrollmentDialogData {
    editingEnrollment?: Enrollment;
}