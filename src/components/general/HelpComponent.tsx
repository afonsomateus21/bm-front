import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export function HelpComponent() {
  const { t } = useTranslation();
  
  return (
    <div 
      className="w-full rounded-xl border-1 border-secondary py-5 flex items-center justify-center gap-2"
      style={{ backgroundColor: "rgba(239, 0, 127, 0.18)" }}
    >
    <InfoIcon />
    <span className="text-xs">
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