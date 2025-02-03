import Shape from '../assets/shape.svg';
import Logo from '../assets/logo.svg';
import { CustomInput } from '../components/CustomInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import { LoginFormInputProps } from '../types/login-form-input-props';
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../utils/validations/loginSchema';
import { Link } from 'react-router';
import { useShowPassword } from '../hooks/useShowPassword';

export function Login() {
  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { errors } 
  } = useForm<LoginFormInputProps>({ resolver: yupResolver(loginSchema) });
  const { showPassword } = useShowPassword();

  async function onSubmit(data: LoginFormInputProps) {
    const userPayload = {
      email: data.email,
      password: data.password,
    }

    console.log(userPayload);

    setValue('email', '');
    setValue('password', '');
  } 

  return (
    <>
      <header className='bg-black relative'>
        <img 
          className='absolute -top-[50px] w-[180px] h-[150px]'
          src={ Shape } 
        />
      </header>

      <main className='h-full flex flex-col items-center p-4 relative'>
        <img 
          className='size-[250px]'
          src={ Logo } 
        />

        <form 
          className='w-full flex flex-col items-center gap-5'
          onSubmit={ handleSubmit(onSubmit) }
        >
          <CustomInput  
            title='Email'
            placeholder='Digite seu email'
            { ...register("email") }
            errors={ errors?.email?.message }
          />

          <CustomInput 
            title='Senha'
            type={ showPassword ? 'text' : 'password' }
            placeholder='Digite sua senha'
            icon={ 
              showPassword ? 
                <VisibilityOffIcon 
                  htmlColor={'black'} 
                  fontSize={ 'large' }
                /> 
              :
                <VisibilityIcon 
                  htmlColor={'black'} 
                  fontSize={ 'large' }
                /> 
            }
            { ...register("password") }
            errors={ errors?.password?.message }
          />

          <PrimaryButton type='submit' title="Cadastrar" />

          <div className="w-full flex items-center">
            <div className="w-full border-b border-black relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-primary px-5 whitespace-nowrap text-secondary">
                Ou entrar com
              </span>
            </div>
          </div>

          <SecondaryButton 
            icon={ 
              <GoogleIcon 
                htmlColor={'white'} 
                fontSize={ 'large' }
              /> 
            } 
          />
        </form>

        <div className='h-32 w-full bg-tertiary absolute bottom-0 rounded-t-2xl flex items-center justify-center'>
          <span className='text-primary text-lg'>
            Ainda não tem uma conta? Faça 
            <strong>
              <Link
                to="/register"
                className='ml-1 underline decoration-solid'
              >
                seu cadastro
              </Link>
            </strong>
          </span>
        </div>
      </main>
    </>
  );
}