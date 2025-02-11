import { LoaderSizeProps } from "react-spinners/helpers/props";
import MoonLoader from "react-spinners/MoonLoader";

export function Spinner({ ...rest }: LoaderSizeProps) {
  return (
    <div className="h-full flex justify-center items-center">
      <MoonLoader { ...rest } />
    </div>
  );
}