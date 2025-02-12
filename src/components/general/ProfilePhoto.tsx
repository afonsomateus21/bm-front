import { ProfilePhotoProps } from "../../types";
import PersonIcon from '@mui/icons-material/Person';

export function ProfilePhoto({ photoUrl, profileName }: ProfilePhotoProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div 
        className="size-16 border-4 border-secondary rounded-full flex items-center justify-center"
        style={photoUrl ? { backgroundImage: `url(${photoUrl})` } : { backgroundColor: 'white' }}
      >
        {
          photoUrl ? null
          : <PersonIcon  
            htmlColor={'gray'} 
            fontSize={ 'large' }
            sx={{ 
              fontSize: 55, 
              color: '#333333',
            }} 
          />
        }
      </div>
      <span className="text-center">{ profileName }</span>
    </div>
  );
}