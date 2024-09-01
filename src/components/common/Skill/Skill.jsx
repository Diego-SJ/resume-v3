import React from 'react';
import { Col } from 'react-grid-system';
import './Skill.scss';

const Skill = ({ title, percentage, variant = 'percentage', src = '', light = false }) => {
  return (
    <Col lg={3} md={4} sm={6} xs={6}>
      {variant === 'percentage' && (
        <div className="skill">
          <h6 className="skill__title">{title}</h6>
          <div className="skill__inner">
            <div className="skill__percentage">{`${percentage}%`}</div>
            <div className="skill__container">
              <span className="skill-active" style={{ width: `${percentage}%` }}></span>
            </div>
          </div>
        </div>
      )}
      {variant === 'logo' && (
        <div className="technology" title={title}>
          <picture className="technology__pic">
            <img src={src} alt={title} className={light ? 'technology__light' : ''} />
          </picture>
          {/* <span className="technology__name">{title}</span> */}
        </div>
      )}
    </Col>
  );
};

export default Skill;
