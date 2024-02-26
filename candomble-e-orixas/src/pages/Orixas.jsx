import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrixasList from '../components/OrixasList';
import '../styles/Orixas.css';

function Orixas() {
  return (
    <>
      <Header />
      <OrixasList />
      <Footer />
    </>
  )
}

export default Orixas;