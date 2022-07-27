import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutPage from './_pages/AboutPage';
import ContactPage from './_pages/ContactPage';
import Footer from './_components/Footer';
import Header from './_components/Header';
import HelpPage from './_pages/HelpPage';
import HomePage from './_pages/HomePage';
import ProjectsPage from './_pages/ProjectsPage';
import QuotePage from './_pages/QuotePage';
import ServicesPage from './_pages/ServicesPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/help' element={<HelpPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/quote' element={<QuotePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
