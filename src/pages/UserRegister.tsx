import { CustomInput } from "../components/CustomInput";
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import { PrimaryButton } from "../components/PrimaryButton";
import { Link } from "react-router";
import { useShowPassword } from "../hooks/useShowPassword";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export function UserRegister() {
  const { showPassword } = useShowPassword();

  return (
    <main className="h-screen flex flex-col justify-evenly overflow-hidden">
      <Link to="/">
        <span className="underline text-md ml-6">Voltar</span>
      </Link>
      <h1 className="text-4xl text-center font-bold">Cadastro</h1>
      <div className="h-4/5 flex flex-col items-center justify-evenly">
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

        <div className="w-full flex flex-col items-center gap-4 h-[500px] overflow-y-scroll p-2 gap-6 mt-5">
          <CustomInput 
            title="Nome" 
            placeholder="Digite seu nome"
          />
          <CustomInput 
            title="Sobrenome" 
            placeholder="Digite seu sobrenome"
          />
          <CustomInput 
            title="Email" 
            type="email" 
            placeholder="Digite seu email"
          />
          <CustomInput 
            title="Telefone" 
            placeholder="Digite seu telefone"
          />
          <CustomInput 
            title="Senha" 
            type={ showPassword ? "text" : "password" } 
            placeholder="Digite sua senha"
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
          />
          <CustomInput 
            title="Confirmar Senha" 
            type={ showPassword ? "text" : "password" }
            placeholder="Confirme sua senha"
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
          />
        </div>

        <div className="w-[90%] mt-8">
          <PrimaryButton title="Cadastrar" />
        </div>
      </div>
    </main>
  );
}