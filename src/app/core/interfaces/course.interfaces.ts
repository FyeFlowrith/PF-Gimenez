export interface Course {
    id: number;
    name: string;
    durationHs: number;
    classCount: number;
    teacherName: string;
}

export interface CourseDialogData {
    editingCourse?: Course;
}