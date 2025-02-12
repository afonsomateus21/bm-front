import { useTranslation } from "react-i18next";
import { useAuth } from "../hooks";
import { ProfilePhoto } from "../components";

export function CustomerHome() {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="p-7">
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
    </div>
  );
}