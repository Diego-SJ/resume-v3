import React from 'react';
import { Link } from 'react-router-dom';
import { LINKEDIN, GITHUB, MEDIUM } from 'src/constants/social';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { handleMenuVisibility } from 'src/redux/appSlice';
import { gaSendEvent } from 'src/config/google';
import Icon from 'src/components/common/Icon';
import ParticlesBg from 'particles-bg';
import Paths from 'src/routes/paths';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const visibility = useSelector(({ app }) => app.showMenu);

  const handleClick = () => {
    if (visibility) dispatch(handleMenuVisibility(false));
  };

  const handleLinkClick = (link) => {
    gaSendEvent({ category: 'clicks', action: `Open: ${link}` });
  };

  return (
    <main onClick={handleClick} className="landing-home">
      <div className="welcome-message">
        <h1 className="primary">
          <span>{t('HOME.hiIam.1')} </span> Diego Salas
        </h1>
        <div className="welcome-message__secondary">
          <p className="paragraph">{t('HOME.objetive.1')}</p>
        </div>
        <div className="welcome-message__social">
          <ul className="social">
            <li className="social-item" title="Email">
              <Link
                to={Paths.CONTACT}
                onClick={() => handleLinkClick(Paths.CONTACT)}
                className="social-item__content"
                aria-label="contact">
                <Icon icon="at-sign" className="social-item__icon" />
              </Link>
            </li>
            <li className="social-item" title="LinkedIn">
              <a
                href={LINKEDIN}
                onClick={() => handleLinkClick('LinkedIn')}
                className="social-item__content"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin">
                <Icon icon="linkedin" className="social-item__icon" />
              </a>
            </li>
            <li className="social-item" title="Medium">
              <a
                href={MEDIUM}
                onClick={() => handleLinkClick('Medium')}
                className="social-item__content"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="medium">
                <Icon icon="medium" className="social-item__icon" />
              </a>
            </li>
            <li className="social-item" title="Github">
              <a
                href={GITHUB}
                onClick={() => handleLinkClick('Github')}
                className="social-item__content"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github">
                <Icon icon="github" className="social-item__icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ParticlesBg type="lines" bg />
    </main>
  );
};

export default Home;
