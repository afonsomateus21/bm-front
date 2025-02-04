import { ButtonProps } from "../../types";

export function FlatButton({ title, ...rest }: ButtonProps) {
  return(
    <button 
      {...rest}
      className="bg-secondary w-full h-16 flex items-center justify-center rounded-xl"
    >
      <strong className="text-white text-xl">
        { title }
      </strong>
    </button>
  );
}