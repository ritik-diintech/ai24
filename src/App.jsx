import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import GlobalPresence from './pages/GlobalPresence';
import AutomationSolutions from './pages/AutomationSolutions';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
            <Route path="/automation-solutions" element={<AutomationSolutions />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
