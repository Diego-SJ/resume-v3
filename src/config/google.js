import ReactGA from 'react-ga4';
import { GOOGLE_ANALYTICS_TRACK_ID } from '../constants/secrets';

// Initialize Google Analytics
export const initializeGA = () => {
  ReactGA.initialize(GOOGLE_ANALYTICS_TRACK_ID);
};

// Send pageview with a custom path
export const gaSendPageview = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

// Send a custom event
export const gaSendEvent = ({ category, action }) => {
  ReactGA.event({ category, action });
};
