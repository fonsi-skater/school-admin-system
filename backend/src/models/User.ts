// User.ts

export interface AdminUser {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'super-admin';
    password: string;
    createdAt: Date;
    updatedAt: Date;
    permissions: string[]; // List of permissions assigned to the admin user
}