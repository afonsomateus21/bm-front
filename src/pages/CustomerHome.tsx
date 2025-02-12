import { useTranslation } from "react-i18next";
import { useAuth } from "../hooks";
import { CustomerHomeOption, HelpComponent, IconButton, ProfilePhoto, TextSeparator } from "../components";
import SchedulingImage from "../assets/scheduling-image.png";
import ServicesImage from "../assets/services-image.png";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export function CustomerHome() {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="p-7 h-full flex flex-col">
      <header className="h-48 flex items-center justify-between">
        <div>
          <h1 className="text-2xl ">{ t('Common.WelcomeMessage') }</h1>
          <strong className="text-4xl ">
            { `${user?.firstName} ${user?.lastName}!` }
          </strong>
        </div>
        <ProfilePhoto 
          profileName={ t('Common.ProfileSubtitle') }
          photoUrl={ user?.photo } 
        />
      </header>

      <TextSeparator text={ t('Common.HomeQuestion') } />

      <main className="mt-10 flex-1 flex flex-col justify-evenly">
        <CustomerHomeOption 
          title={ t('Scheduling.Title') }
          description={ t('Scheduling.Description') }
          imageUrl={ SchedulingImage }
          redirectTo="/services"
        />

        <CustomerHomeOption 
          title={ t('Services.Title') }
          description={ t('Services.Description') }
          imageUrl={ ServicesImage }
          redirectTo="/services"
        />

        <HelpComponent />

        <IconButton 
          title="Sair"
          icon={ 
            <ExitToAppIcon 
              htmlColor={'white'} 
              fontSize={ 'large' }
            /> 
          } 
        />
      </main>
    </div>
  );
}