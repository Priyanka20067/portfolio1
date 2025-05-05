import React from 'react'

/* Componet */
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main';
import Content from '../../components/Content/Content';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Typical from 'react-typical';


const Home = () => {
  return (
    <div>

      <Header />

      <ParticleBackground />

      <Content />

      <Main />

      <ScrollToTop />

      <Footer />

    </div>
  )
}
<Typical steps={['Developer', 1000, 'Designer', 1000]} loop={Infinity} />

export default Home;