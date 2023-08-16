import React from 'react';
import Icon from 'src/components/common/Icon';
import './CardService.scss';

export default function CardService({ icon, title, description = null }) {
  return (
    <div className="service-card">
      <Icon icon={icon} className="service-card__icon" />
      <h1 className="service-card__title">{title}</h1>
      {description && <p className="service-card__description">{description}</p>}
    </div>
  );
}
