import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import TextLink from '@/components/TextLink';

type Props = {
  target: 'sms' | 'email';
  className?: string;
};

const PasswordlessSwitch = ({ target, className }: Props) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const targetPathname = pathname.replace(target === 'email' ? 'sms' : 'email', target);

  return (
    <TextLink replace className={className} to={targetPathname}>
      {t('action.switch_to', {
        method: t(`description.${target === 'email' ? 'email' : 'phone_number'}`),
      })}
    </TextLink>
  );
};

export default PasswordlessSwitch;