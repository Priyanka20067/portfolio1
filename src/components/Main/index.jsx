import React from 'react';
import Typical from 'react-typical';

/* Componet */
import About from './About';
import Service from './Service';
import Project from './Project';
import Contact from './Contact';

const Main = () => (
    <main>
        <About />        

        <Service />
        
        <Project />

        <Contact />
    </main>
);
<Typical steps={['Developer', 1000, 'Designer', 1000]} loop={Infinity} />

export default Main;