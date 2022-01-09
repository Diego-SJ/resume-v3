import React from 'react';
import { Col } from 'react-grid-system';
import { PersonalData, Services } from 'src/utils/dbTemp';
import { useTranslation } from 'react-i18next';
import { gaSendEvent } from 'src/config/google';
import Landing from 'src/components/layouts/Landing';
import ButtonPrimary from 'src/components/common/ButtonPrimary';
import ModalBasic from 'src/components/common/Modal';
import useModal from 'use-react-modal';
import Section from 'src/components/layouts/Section';
import CardService from 'src/components/common/Card/CardService';
import resumeSpanish from 'src/assets/file/Juan Diego Salas Jimenez - es.pdf';
import resumeEnglish from 'src/assets/file/Juan Diego Salas Jimenez - en.pdf';
import photo from 'src/assets/img/profile/jdsj.webp';
import './About.scss';

const About = () => {
  const { t } = useTranslation();
  const { isOpen, openModal, closeModal, Modal } = useModal(initialModalState);

  const openResume = (lang = 'es') => {
    let filePath = { es: resumeSpanish, en: resumeEnglish };
    window.open(filePath[lang]);
    gaSendEvent({ category: 'clicks', action: `Download: (${lang}) resume` });
    closeModal();
  };

  const handleOpenModal = (event) => {
    openModal(event);
    gaSendEvent({ category: 'clicks', action: 'Open: download resume modal' });
  };

  return (
    <Landing>
      <Section title={'ABOUT.title.2'}>
        <Col lg={6}>
          <div className="section-content__avatar">
            <img src={photo} alt="Juan Diego Salas Jimenez" title="Juan Diego Salas Jimenez" />
          </div>
        </Col>
        <Col lg={6}>
          <div className="section-content__info">
            <h1 className="secondary">
              <span>{t('ABOUT.iam.1')} </span> Diego!
            </h1>
            <p className="paragraph">{t('ABOUT.info.1')}</p>
            <ul className="personal-data">
              {PersonalData.map((data) => (
                <li key={data.id} className="personal-data__item">
                  <span className="paragraph">
                    <b>{t(data.title)}</b> {t(data.description)}
                  </span>
                </li>
              ))}
            </ul>
            <ButtonPrimary type="button" content={`${t('ABOUT.downloadResume.1')}`} onClick={handleOpenModal} />
            <ModalBasic isOpen={isOpen} closeModal={closeModal} Modal={Modal} btnClose={false}>
              <div className="resumes">
                <ButtonPrimary content={`${t('ABOUT.downloadResume.es')}`} onClick={() => openResume('es')} />
                <ButtonPrimary content={`${t('ABOUT.downloadResume.en')}`} onClick={() => openResume('en')} />
              </div>
            </ModalBasic>
          </div>
        </Col>
      </Section>

      <Section title={'ABOUT.title.3'}>
        {Services.map((service) => (
          <Col key={service.id} lg={4} md={6} sm={12} style={{ marginBottom: '3rem' }}>
            <CardService icon={t(service.icon)} title={t(service.title)} description={t(service.description)} />
          </Col>
        ))}
      </Section>
    </Landing>
  );
};

const initialModalState = {
  background: 'rgba(0, 0, 0, 0.85)',
  closeOnOutsideClick: true,
  closeOnEsc: true,
};

export default About;
