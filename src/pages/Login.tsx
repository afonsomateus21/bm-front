import Shape from '../assets/shape.svg';
import Logo from '../assets/logo.svg';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from 'react-router';
import { FormInput, FlatButton, IconButton } from '../components';
import { useAuth, useShowPassword } from '../hooks';
import { LoginFormInputProps } from '../types';
import { loginSchema } from '../utils';
import { useTranslation } from 'react-i18next';

export function Login() {
  const { t } = useTranslation();
  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { errors } 
  } = useForm<LoginFormInputProps>({ resolver: yupResolver(loginSchema(t)) });
  const { showPassword } = useShowPassword();
  const { login } = useAuth()

  async function onSubmit(data: LoginFormInputProps) {
    const userPayload = {
      email: data.email,
      password: data.password,
    }

    console.log(userPayload);

    await login(userPayload);

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

      <main className='h-full flex flex-col items-center p-4 relative pt-10'>
        <img 
          className='size-[250px]'
          src={ Logo } 
        />

        <form 
          className='w-full flex flex-col items-center gap-7'
          onSubmit={ handleSubmit(onSubmit) }
        >
          <FormInput  
            title={ `${t('Common.Form.Fields.Email')}` }
            placeholder={ `${t('Common.Form.Placeholders.Email')}` }
            required
            { ...register("email") }
            errors={ errors?.email?.message }
          />

          <FormInput 
            title={ `${t('Common.Form.Fields.Password')}` }
            type={ showPassword ? 'text' : 'password' }
            placeholder={ `${t('Common.Form.Placeholders.Password')}` }
            required
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
            { ...register("password") }
            errors={ errors?.password?.message }
          />

          <FlatButton type='submit' title="Entrar" />

          <div className="w-full flex items-center">
            <div className="w-full border-b border-black relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-primary px-5 whitespace-nowrap text-secondary text-lg">
                { `${t('Login.Texts.LoginWith')}` }
              </span>
            </div>
          </div>

          <IconButton 
            icon={ 
              <GoogleIcon 
                htmlColor={'white'} 
                fontSize={ 'large' }
              /> 
            } 
          />
        </form>

        <div className='h-32 w-full bg-tertiary absolute bottom-0 rounded-t-2xl flex items-center justify-center'>
          <span className='text-primary text-sm'>
            { `${t('Login.Texts.DontHaveAnAccount')}` }
            <strong>
              <Link
                to="/register"
                className='ml-1 underline decoration-solid'
              >
                { `${t('Login.Texts.YourRegistration')}` }
              </Link>
            </strong>
          </span>
        </div>
      </main>
    </>
  );
}