import Shape from '../assets/shape.svg';
import Logo from '../assets/logo.svg';
import { CustomInput } from '../components/CustomInput';
import { PrimaryButton } from '../components/PrimaryButton';

export function Login() {
  return (
    <>
      <header className='bg-black relative'>
        <img 
          className='absolute -top-[50px] w-[180px] h-[150px]'
          src={ Shape } 
        />
      </header>

      <main className='h-full flex flex-col items-center p-4'>
        <img 
          className='size-[250px]'
          src={ Logo } 
        />

        <div className='w-full flex flex-col items-center gap-4 flex-1'>
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
        </div>
      </main>
    </>
  );
}