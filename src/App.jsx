import React, { useEffect, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { gaSendPageview } from './config/google';
import './sass/main.scss';
const Routing = lazy(() => import('./routes'));
const LanguageButton = lazy(() => import('./components/common/LanguageButton'));
const ParticlesBg = lazy(() => import('particles-bg'));

function App() {
  const location = useLocation();

  useEffect(() => {
    gaSendPageview(location.pathname);
  }, [location.pathname]);

  return (
    <ToastProvider>
      <section className="container">
        <LanguageButton />
        <Routing />
        <ParticlesBg color="#2f353e" type="cobweb" bg />
      </section>
    </ToastProvider>
  );
}

export default App;
