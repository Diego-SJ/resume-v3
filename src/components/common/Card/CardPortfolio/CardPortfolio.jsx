import { useState } from 'react';
import { Col } from 'react-grid-system';
import { useTranslation } from 'react-i18next';
import { gaSendEvent } from 'src/config/google';
import ImageLoader from 'src/components/common/ImageLoader';
import ModalBasic from 'src/components/common/Modal';
import Icon from 'src/components/common/Icon';
import useModal from 'use-react-modal';
import './CardPortfolio.scss';

const CardPortfolio = ({ image = null, title, description, link = null }) => {
  const { t } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { isOpen, openModal, closeModal, Modal } = useModal(initialModalState);

  const handleOpenModal = (event) => {
    openModal(event);
    gaSendEvent({ category: 'clicks', action: `Open: ${t(title)} modal` });
  };

  const handleLinkClick = () => {
    gaSendEvent({ category: 'clicks', action: `Open: ${link}` });
  };

  return (
    <>
      <Col lg={4} sm={12} md={6}>
        <div className="portfolios-card">
          <div className="portfolios-card__head">
            <div className="portfolios-card__image">
              <img
                src={image}
                className="d-none"
                onLoad={() => setTimeout(() => setIsImageLoaded(true), 100)}
                alt="hidden-img"
              />
              {isImageLoaded && (
                <div className="portfolios-card__image-div" style={{ backgroundImage: `url(${image})` }} />
              )}
              {!isImageLoaded && <ImageLoader />}
            </div>
            <div className="portfolios-card__hide">
              {image && (
                <button onClick={handleOpenModal} className="portfolios-card__options">
                  <Icon icon="eye" className="portfolios-card__options-icon" />
                </button>
              )}
              {link && (
                <a
                  href={link}
                  onClick={handleLinkClick}
                  target="_blank"
                  without={`true`}
                  rel="noopener noreferrer"
                  className="portfolios-card__options">
                  <Icon icon="external-link" className="portfolios-card__options-icon" />
                </a>
              )}
            </div>
          </div>
          <div className="portfolios-card__wraper">
            <div className="portfolios-card__title">
              <a href={link} onClick={handleLinkClick} target="_blank" without={`true`} rel="noopener noreferrer">
                {t(title)}
              </a>
            </div>
            <div className="portfolios-card__description">
              <p>{t(description)}</p>
            </div>
          </div>
        </div>
      </Col>
      <ModalBasic isOpen={isOpen} closeModal={closeModal} Modal={Modal}>
        <img src={image} alt={title} className="modal__image" />
      </ModalBasic>
    </>
  );
};

const initialModalState = {
  background: 'rgba(0, 0, 0, 0.8)',
  closeOnOutsideClick: true,
  closeOnEsc: true,
};

export default CardPortfolio;
