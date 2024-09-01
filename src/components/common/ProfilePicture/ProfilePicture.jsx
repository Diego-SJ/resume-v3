import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from 'src/assets/profile.webp';
import Paths from 'src/routes/paths';
import './ProfilePicture.scss';

const ProfilePicture = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  return (
    <Link to={Paths.HOME} className={`header__user ${isImageLoaded && 'load'}`}>
      <img
        onLoad={() => setTimeout(() => setIsImageLoaded(false), 0)}
        src={ProfilePic}
        alt="Juan Diego Salas Jimenez"
        className={`header__photo ${isImageLoaded && 'd-none'}`}
      />
    </Link>
  );
};

export default memo(ProfilePicture);
