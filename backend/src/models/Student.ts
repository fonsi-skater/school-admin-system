export interface Student {
    id: number;
    name: string;
    age: number;
    email: string;
    enrollmentDate: Date;
}

export class StudentModel {
    constructor(private student: Student) {}

    // Method to save the student to the database
    public save(): void {
        // Implementation for saving the student details to the database
    }

    // Method to find a student by ID
    public static findById(id: number): Student | null {
        // Implementation for finding a student in the database
        return null;
    }
}