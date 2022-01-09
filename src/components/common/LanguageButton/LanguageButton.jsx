import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { switchLanguageAction } from 'src/redux/appSlice';
import { LAN_EN, SPANISH, ENGLISH } from 'src/constants/strings';
import { MX_FLAG, USA_FLAG } from 'src/constants/firebase';

import './LanguageButton.scss';

export default function LanguageButton() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { language } = useSelector(({ app }) => app);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const onClick = () => {
    dispatch(switchLanguageAction());
  };

  return (
    <button aria-label="languageButton" className="language" onClick={onClick}>
      <div style={{ backgroundImage: `url(${language === LAN_EN ? MX_FLAG : USA_FLAG})` }} />
      <span>{language === LAN_EN ? SPANISH : ENGLISH}</span>
    </button>
  );
}
