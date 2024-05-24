import './App.css'
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import FAQPage from './pages/faqPage';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
            </Routes>
        </Router>
    )
}

export default App