import { object, string } from "yup";

export const loginSchema = object({
  email: string()
    .required("O e-mail é obrigatório")
    .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, "E-mail inválido"),
  password: string()
    .required("A senha é obrigatória")
})