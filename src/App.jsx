import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { gaSendPageview } from './config/google';
import './sass/main.scss';
const Routing = React.lazy(() => import('./routes'));
const LanguageButton = React.lazy(() => import('./components/common/LanguageButton'));
const ParticlesBg = React.lazy(() => import('particles-bg'));

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
