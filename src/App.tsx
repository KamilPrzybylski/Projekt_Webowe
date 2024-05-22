import './App.css'
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutPage from './pages/aboutPage';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    )
}

export default App