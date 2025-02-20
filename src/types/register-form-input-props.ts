export interface RegisterFormInputProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string
  password: string;
  confirmPassword: string;
  profilePhoto?: File;
}