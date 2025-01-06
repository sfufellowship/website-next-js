import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const i18nConfig = {
  defaultLocale: 'zh',
  locales: ['zh', 'en'],
};

export const getI18nProps = async (locale: string, ns = ['common']) => {
  return {
    ...(await serverSideTranslations(locale, ns)),
  };
};
