import { TFunction } from "i18next";
import { object, string, ref } from "yup";


export const registerSchema = (t: TFunction) =>
  object({
    firstName: string()
      .required(t('Common.Form.Errors.FirstName.Required')),
    lastName: string()
      .required(t('Common.Form.Errors.LastName.Required')),
    email: string()
      .required(t('Common.Form.Errors.Email.Required'))
      .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, t('Common.Form.Errors.Email.Invalid')),
    phone: string()
      .required(t('Common.Form.Errors.Phone.Required')),
    password: string()
      .required(t('Common.Form.Errors.Password.Required')),
    confirmPassword: string()
      .required(t('Common.Form.Errors.ConfirmPassword.Required'))
      .oneOf([ ref("password") ], t('Common.Form.Errors.ConfirmPassword.Invalid'))
  })