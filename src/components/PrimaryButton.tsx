import { ButtonProps } from "../types/button-props";

export function PrimaryButton({ ...rest }: ButtonProps) {
  return(
    <button 
      {...rest}
      className="bg-secondary w-full h-16 flex items-center justify-center rounded-xl"
    >
      <strong className="text-white text-xl">
        Entrar
      </strong>
    </button>
  );
}