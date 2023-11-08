import LocaleSwitcher from '@/components/LocaleSwitcher';
import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

export default function IndexPage() {
  // const t = useTranslations('IndexPage');

  return (
    <div>
      {/* <LocaleSwitcher /> */}
      {/* <Button>{t('title')}</Button> */}
      {/* {t.rich('description', {
        code: chunks => <code className="font-mono ">{chunks}</code>,
      })} */}
    </div>
  );
}
