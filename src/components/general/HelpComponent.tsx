import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export function HelpComponent() {
  const { t } = useTranslation();
  
  return (
    <div 
      className="w-full rounded-lg py-5 flex items-center justify-center gap-2"
      style={{ backgroundColor: "rgba(239,0,127,0.3)" }}
    >
      <InfoIcon />
      <span className="text-sm">
        { t('Common.HelpMessage') }
        <strong className="underline">
          <Link to="">
            { ` ${t('Common.KeepInTouch')}` }
          </Link>
        </strong>
      </span>
    </div>
  );
}