import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleMenuVisibility } from 'src/redux/appSlice';
import './Landing.scss';

const Landing = ({ children }) => {
  const dispatch = useDispatch();
  const visibility = useSelector(({ app }) => app.showMenu);

  const handleClick = () => {
    if (visibility) dispatch(handleMenuVisibility(false));
  };

  return (
    <main onClick={handleClick} className="landing">
      {children}
    </main>
  );
};

export default Landing;
