import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Paths
import Paths from './paths';

// Components
const SlideMenu = lazy(() => import('src/components/layouts/SlideMenu'));
const Blog = lazy(() => import('src/components/pages/Blog'));
const Home = lazy(() => import('src/components/pages/Home'));
const About = lazy(() => import('src/components/pages/About'));
const Resume = lazy(() => import('src/components/pages/Resume'));
const Contact = lazy(() => import('src/components/pages/Contact'));
const Portfolio = lazy(() => import('src/components/pages/Portfolio'));

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
