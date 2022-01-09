import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { switchLanguageAction } from 'src/redux/appSlice';
import { LAN_EN, SPANISH, ENGLISH } from 'src/constants/strings';
import MexicanFlag from 'src/assets/img/language/es.webp';
import UsaFlag from 'src/assets/img/language/en.webp';

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
      <div style={{ backgroundImage: `url(${language === LAN_EN ? MexicanFlag : UsaFlag})` }} />
      <span>{language === LAN_EN ? SPANISH : ENGLISH}</span>
    </button>
  );
}
