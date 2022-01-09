import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { handleMenuVisibility } from 'src/redux/appSlice';

import ProfilePicture from 'src/components/common/ProfilePicture';
import SidemenuItem from 'src/components/common/SidemenuItem';
import Icon from 'src/components/common/Icon';
import Paths from 'src/routes/paths';
import './SlideMenu.scss';

const SlideMenu = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const visibility = useSelector(({ app }) => app.showMenu);

  const changeVisibility = () => {
    dispatch(handleMenuVisibility());
  };

  return (
    <>
      <aside className={`sidebar ${visibility ? 'show' : ''}`}>
        <div className="btn-show-menu" onClick={() => changeVisibility()}>
          <button type="button" aria-label="closeOpenButton">
            <Icon icon="align-justify" className="icon" />
          </button>
        </div>
        <div className="header">
          <ProfilePicture />
        </div>
        <ul className="side-bar">
          <SidemenuItem url={Paths.HOME} icon="home" title="HOME.title" />
          <SidemenuItem url={Paths.ABOUT} icon="info" title="ABOUT.title.1" />
          <SidemenuItem url={Paths.RESUME} icon="book" title="RESUME.title.1" />
          <SidemenuItem url={Paths.PORTFOLIO} icon="folder" title="PORTFOLIO.title.1" />
          <SidemenuItem url={Paths.BLOG} icon="blog" title="BLOG" />
          <SidemenuItem url={Paths.CONTACT} icon="phone" title="CONTACT.title.1" />
        </ul>
        <div className="legal">&copy; {t('LEGAL.madeBy')}</div>
      </aside>
    </>
  );
};

export default memo(SlideMenu);
