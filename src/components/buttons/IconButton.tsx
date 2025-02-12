import { ButtonProps } from "../../types";

export function IconButton({ icon, title, ...rest }: ButtonProps) {
	return(
		<button 
			{...rest}
			className="bg-secondary w-full h-16 flex items-center justify-center rounded-xl relative"
		>
			<div className="bg-tertiary h-full w-20 absolute left-0 rounded-xl flex items-center justify-center">
				{ icon }
			</div>
			<strong className="text-white text-xl">
				{ title }
			</strong>
		</button>
	);
}