import React from 'react';
import Icon from 'src/components/common/Icon';
import './ImageLoader.scss';

export default function ImageLoader() {
  return (
    <div className="img-loader">
      <Icon icon="spinner9" className="img-loader-icon" />
      <span>Loading...</span>
    </div>
  );
}
