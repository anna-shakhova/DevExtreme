export interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    dob: Date | null;
    vacationDates: [Date | null, Date | null];
    country: string;
    city: string;
    address: string;
    phone?: string;
}