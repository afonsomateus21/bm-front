import { useNavigate } from "react-router";
import { CustomerHomeOptionProps } from "../../types";

export function CustomerHomeOption({ title, description, imageUrl, redirectTo } : CustomerHomeOptionProps) {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(redirectTo);
  }

  return (
    <div 
      className="h-44 w-full rounded-2xl relative bg-cover shadow-2xl active:scale-105 transition-transform duration-300"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => handleRedirect()}
    >
      <div 
        className="h-full w-full rounded-2xl absolute"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
      >
        <div className="w-full h-full relative p-7 flex flex-col justify-end">
          <h1 className="text-3xl text-white font-extrabold">
            { title }
          </h1>
          <span className="text-md text-white font-medium mr-10">
            { description }
          </span>
        </div>
      </div>
    </div>
  );
}