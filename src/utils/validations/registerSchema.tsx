import { object, string, ref } from "yup";

export const registerSchema = object({
  firstName: string()
    .required("O nome é obrigatório"),
  lastName: string()
    .required("O sobrenome é obrigatório"),
  email: string()
    .required("O e-mail é obrigatório")
    .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, "E-mail inválido"),
  phone: string()
    .required("O telefone é obrigatório"),
  password: string()
    .required("A senha é obrigatória"),
  confirmPassword: string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([ ref("password") ], "As senhas devem ser iguais")
})