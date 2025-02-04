import { CustomInput } from "../components/CustomInput";
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import { PrimaryButton } from "../components/PrimaryButton";
import { Link } from "react-router";
import { useShowPassword } from "../hooks/useShowPassword";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { formatPhone } from "../utils/formats/formatPhone";
import { RegisterFormInputProps } from "../types/register-form-input-props";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/validations/registerSchema";

export function UserRegister() {
  const { 
    register, 
    setValue, 
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<RegisterFormInputProps>({
    defaultValues: {
      firstName: "",
      lastName: ""
    },
    resolver: yupResolver(registerSchema)
  });
  const { showPassword } = useShowPassword();
  const [ formattedPhone, setFormattedPhone ] = useState("");

  const firstName = watch("firstName", "");
  const lastName = watch("lastName", "");

  function handleChangePhone(event: ChangeEvent<HTMLInputElement>) {
    const formattedValue = formatPhone(event.target.value);
    setFormattedPhone(formattedValue);
    setValue("phone", formattedValue)
  }

  function handleTextChange(field: keyof RegisterFormInputProps, value: string) {
    const onlyLetters = value.replace(/\d/g, "");
    setValue(field, onlyLetters);
  }

  function onSubmit(data: RegisterFormInputProps) {
    console.log('entrou');
    console.log(data);
    const userPayload = {
      email: data.email,
      password: data.password,
    }

    console.log(userPayload);

    setValue('email', '');
    setValue('password', '');
  } 

  return (
    <main className="h-screen flex flex-col justify-evenly overflow-hidden">
      <Link to="/">
        <span className="underline text-md ml-6">Voltar</span>
      </Link>
      <h1 className="text-4xl text-center font-bold">Cadastro</h1>
      <form 
        className="h-4/5 flex flex-col items-center justify-evenly"
        onSubmit={ handleSubmit(onSubmit) }
      >
        <div className="flex flex-col items-center">
          <label 
            className="border-2 border-secondary border-dashed rounded-xl w-40 h-40 cursor-pointer relative shadow-xl"
          >
            <UploadFileRoundedIcon 
              sx={{ 
                fontSize: 80, 
                color: '#333333',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }} 
            />
            <input 
              className="opacity-0"
              type="file"  
            />
          </label>

          <strong className="mt-5 text-tertiary">Foto de Perfil</strong>
        </div>

        <div className="w-full flex flex-col items-center h-[500px] overflow-y-scroll p-2 gap-6 mt-5">
          <CustomInput 
            title="Nome" 
            placeholder="Digite seu nome"
            value={firstName}
            required
            { ...register("firstName") }
            onChange={(e) => handleTextChange("firstName", e.target.value)}
            errors={ errors?.firstName?.message }
          />
          <CustomInput 
            title="Sobrenome" 
            placeholder="Digite seu sobrenome"
            value={lastName}
            required
            { ...register("lastName") }
            onChange={(e) => handleTextChange("lastName", e.target.value)}
            errors={ errors?.lastName?.message }
          />
          <CustomInput 
            title="Email" 
            type="email" 
            placeholder="Digite seu email"
            required
            { ...register("email") }
            errors={ errors?.email?.message }
          />
          <CustomInput 
            title="Telefone" 
            placeholder="Digite seu telefone"
            value={ formattedPhone }
            { ...register("phone") }
            onChange={ handleChangePhone }
            maxLength={ 15 }
            errors={ errors?.phone?.message }
          />
          <CustomInput 
            title="Senha" 
            type={ showPassword ? "text" : "password" } 
            placeholder="Digite sua senha"
            required
            { ...register("password") }
            icon={ 
              showPassword ? 
                <VisibilityOffIcon 
                  htmlColor={'gray'} 
                  fontSize={ 'large' }
                /> 
              :
                <VisibilityIcon 
                  htmlColor={'gray'} 
                  fontSize={ 'large' }
                /> 
            }
            errors={ errors?.password?.message }
          />
          <CustomInput 
            title="Confirmar Senha" 
            type={ showPassword ? "text" : "password" }
            placeholder="Confirme sua senha"
            required
            { ...register("confirmPassword") }
            icon={ 
              showPassword ? 
                <VisibilityOffIcon 
                  htmlColor={'gray'} 
                  fontSize={ 'large' }
                /> 
              :
                <VisibilityIcon 
                  htmlColor={'gray'} 
                  fontSize={ 'large' }
                /> 
            }
            errors={ errors?.confirmPassword?.message }
          />
        </div>

        <div className="w-[90%] mt-8">
          <PrimaryButton type="submit" title="Cadastrar" />
        </div>
      </form>
    </main>
  );
}