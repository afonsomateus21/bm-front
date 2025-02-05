import { TFunction } from "i18next";
import { object, string } from "yup";

export const loginSchema = (t: TFunction) =>
  object({
    email: string()
      .required(t("Common.Form.Errors.Email.Required"))
      .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/, t("Common.Form.Errors.Email.Invalid")),
    password: string()
      .required(t("Common.Form.Errors.Password.Required"))
  })