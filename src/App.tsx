import './App.css'
import Navbar from "./components/nav/Navbar.tsx";
import Homepage from "./pages/home/Home.tsx";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import Contact from "./pages/contact/contact.tsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import Education from "./pages/education/education.tsx";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

function App() {
    return (
        <>
            <HashRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace/>}/>
                    <Route path="/home" element={<Homepage/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/solutions" element={<Homepage/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<Homepage/>}/>
                </Routes>
            </HashRouter>
        </>
    )
}

export default App
