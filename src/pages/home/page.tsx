import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center pt-8">
      <h1 className="text-xl font-bold">{t('home.message')}</h1>
    </div>
  );
}
