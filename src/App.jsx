import React, { useState, useEffect } from 'react';
import {
    Route,
    Routes,
    useLocation
} from "react-router-dom";
import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";
import Project from "./pages/Project/ProjectPage";
import ProjectApp from "./pages/Project/ProjectApp";
import ProjectGame from "./pages/Project/ProjectGame";
import AdminDashboard from "./pages/Admin/AdminDashboard";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";
import { PortfolioProvider, usePortfolio } from "./context/PortfolioContext";

function MainContent() {
    const [loading, setLoading] = useState(false);
    const { profile } = usePortfolio();
    const location = useLocation();

    // Do not show the splash loading screen on /admin route
    const isAdminRoute = location.pathname.startsWith('/admin');

    useEffect(() => {
        if (!isAdminRoute) {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [isAdminRoute]);

    const displayName = profile?.name ? profile.name.toLowerCase().split(' ')[0] : 'priyanka';

    return (
        <>
            <RouterScrollTop />
            {loading && !isAdminRoute ? (
                <div className='loading-pag'>
                    <div className="loader">
                        <span>💻({displayName})💻</span>
                        <span>💻({displayName})💻</span>
                    </div>
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/service" element={<Services />}></Route>
                    <Route exact path="/project" element={<Project />}></Route>
                    <Route exact path="/project/app" element={<ProjectApp />} />
                    <Route exact path="/project/game" element={<ProjectGame />} />
                    <Route exact path="/admin" element={<AdminDashboard />} />
                </Routes>
            )}
        </>
    );
}

function App() {
    return (
        <PortfolioProvider>
            <MainContent />
        </PortfolioProvider>
    );
}

export default App;
