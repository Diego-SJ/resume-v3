import React from 'react';
import { useTranslation } from 'react-i18next';
import './TimeLine.scss';

const TimeLine = ({ list = [] }) => {
  const { t } = useTranslation();

  return (
    <ul className="time-line">
      {list
        ?.sort((a, b) => b?.id - a?.id)
        .map((item, index) => (
          <li key={index} className="time-line__item">
            <span className="time-line__date">{t(item.date)}</span>
            <div className="time-line__content">
              <h3>{t(item.title)}</h3>
              {item?.url ? (
                <h4>
                  <a href={item.url} target="_blank" referrerPolicy="no-referrer">
                    {t(item.subtitle)}
                  </a>
                </h4>
              ) : (
                <h4>{t(item.subtitle)}</h4>
              )}
              {t(item.description).split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TimeLine;
