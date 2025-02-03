import { CustomInput } from "../components/CustomInput";
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import { PrimaryButton } from "../components/PrimaryButton";
import { Link } from "react-router";

export function UserRegister() {
  return (
    <main className="h-screen flex flex-col justify-evenly overflow-hidden">
      <Link to="/">
        <span className="underline text-xl ml-6">Voltar</span>
      </Link>
      <h1 className="text-4xl text-center">Cadastro</h1>
      <div className="h-4/5 flex flex-col items-center justify-evenly">
        <div className="flex flex-col items-center">
          <label 
            className="border-2 border-secondary border-dashed rounded-xl w-40 h-40 cursor-pointer relative shadow-xl"
          >
            <UploadFileRoundedIcon 
              sx={{ 
                fontSize: 100, 
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

          <strong className="mt-2 text-tertiary">Foto de Perfil</strong>
        </div>

        <div className="w-full flex flex-col items-center gap-4 h-[500px] overflow-y-scroll p-2">
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
            type="password" 
            placeholder="Digite sua senha"
          />
          <CustomInput 
            title="Confirmar Senha" 
            type="password" 
            placeholder="Confirme sua senha"
          />
        </div>

        <div className="w-[90%] mt-8">
          <PrimaryButton title="Cadastrar" />
        </div>
      </div>
    </main>
  );
}