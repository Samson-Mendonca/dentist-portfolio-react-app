import './App.css';
import Banner from './components/Banner.jsx';

import NavBar from './components/NavBar';

import Skills from './components/Skills';
import ContactComponent from './components/contact';
import FooterComponent from './components/Footer';
import ExperienceComponent from './components/ExperienceComponent';
import AboutComponent from './components/AboutComponent';
import FeedbackComponent from './components/Feedbacks';



function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <AboutComponent/>
    <ExperienceComponent/>
    <FeedbackComponent/>
 <ContactComponent/>
 <FooterComponent/>
      </>
  );
}

export default App;
