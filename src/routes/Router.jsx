import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Paths
import Paths from './paths';

// Components
import SlideMenu from 'src/components/layouts/SlideMenu';
import Blog from 'src/components/pages/Blog';
import Home from 'src/components/pages/Home';
import About from 'src/components/pages/About';
import Resume from 'src/components/pages/Resume';
import Contact from 'src/components/pages/Contact';
import Portfolio from 'src/components/pages/Portfolio';

export default function Routing() {
  return (
    <>
      <SlideMenu />
      <Routes>
        <Route index path={Paths.HOME} element={<Home />} />
        <Route path={Paths.ABOUT} element={<About />} />
        <Route path={Paths.RESUME} element={<Resume />} />
        <Route path={Paths.PORTFOLIO} element={<Portfolio />} />
        <Route path={Paths.BLOG} element={<Blog />} />
        <Route path={Paths.CONTACT} element={<Contact />} />
      </Routes>
    </>
  );
}
