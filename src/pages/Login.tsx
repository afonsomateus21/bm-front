import Shape from '../assets/shape.svg';
import Logo from '../assets/logo.svg';
import { CustomInput } from '../components/CustomInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';

export function Login() {
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

        <div className='w-full flex flex-col items-center gap-4'>
          <div className="w-full max-w-sm flex flex-col">
            <label 
              htmlFor='email'
              className='text-tertiary font-bold'
            >
              E-mail
            </label>
            <CustomInput 
              id='email'
              placeholder='Digite seu email'

            />
          </div>

          <div className="w-full max-w-sm flex flex-col">
            <label 
              htmlFor='email'
              className='text-tertiary font-bold'
            >
              Senha
            </label>
            <CustomInput 
              id='email'
              type='password'
              placeholder='Digite sua senha'
            />
            <span className='ml-auto mt-1 underline decoration-solid'>
              Esqueci minha senha
            </span>
          </div>

          <PrimaryButton />

          <div className="w-full flex items-center">
            <div className="w-full border-b border-black relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-primary px-5 whitespace-nowrap text-secondary">
                Ou entrar com
              </span>
            </div>
          </div>

          <SecondaryButton />
        </div>

        <div className='h-32 w-full bg-tertiary absolute bottom-0 rounded-t-2xl flex items-center justify-center'>
          <span className='text-primary text-lg'>
            Ainda não tem uma conta? Faça 
            <strong>
              <a 
                href=""
                className='ml-1 underline decoration-solid'
              >
                seu cadastro
              </a>
            </strong>
          </span>
        </div>
      </main>
    </>
  );
}