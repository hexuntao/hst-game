import { notFound } from 'next/navigation';
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import { Providers } from './Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { locales } from '@/locales';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return {
    title: t('LocaleLayout.title'),
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'black' },
      { media: '(prefers-color-scheme: dark)', color: 'white' },
    ],
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <head />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
