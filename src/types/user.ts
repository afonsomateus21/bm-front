enum UserType {
  Admin = "ADMIN",
  Customer = "CUSTOMER"
}

export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  type?: UserType;
  phone?: string;
  photo?: string;
  googleSub?: number;
}