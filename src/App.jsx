import React, { useEffect, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { gaSendPageview } from './config/google';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/config/i18n';
const Routing = lazy(() => import('./routes'));
const LanguageButton = lazy(() => import('./components/common/LanguageButton'));
const ParticlesBg = lazy(() => import('particles-bg'));
import './sass/main.scss';

function App() {
  const location = useLocation();

  useEffect(() => {
    gaSendPageview(location.pathname);
  }, [location.pathname]);

  return (
    <ToastProvider>
      <I18nextProvider i18n={i18n}>
        <section className="container">
          <LanguageButton />
          <Routing />
          <ParticlesBg color="#2f353e" type="cobweb" bg />
        </section>
      </I18nextProvider>
    </ToastProvider>
  );
}

export default App;
