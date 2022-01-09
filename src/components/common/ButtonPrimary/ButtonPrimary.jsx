import React from 'react';
import Icon from 'src/components/common/Icon';
import './ButtonPrimary.scss';

export default function ButtonPrimary(props) {
  const { loading, type = 'button', content, onClick } = props;

  return (
    <button type={type} onClick={onClick} className="btn-primary" disabled={loading} aria-label="primaryButton">
      {loading ? (
        <div className="btn-primary__loader">
          <Icon icon="spinner9" />
        </div>
      ) : (
        <span>{content}</span>
      )}
    </button>
  );
}
