import { ProfilePhotoProps } from "../../types";
import PersonIcon from '@mui/icons-material/Person';

export function ProfilePhoto({ photoUrl, profileName }: ProfilePhotoProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div 
        className="size-18 rounded-full flex items-center justify-center bg-gray-200 shadow-xl"
        style={photoUrl ? { backgroundImage: `url(${photoUrl})`, backgroundSize: 'cover' } : {}}
      >
        {
          photoUrl ? null
          : <PersonIcon  
            htmlColor={'gray'} 
            fontSize={ 'large' }
            sx={{ 
              fontSize: 45, 
              color: '#333333',
            }} 
          />
        }
      </div>
      <span className="text-center font-bold text-sm">{ profileName }</span>
    </div>
  );
}