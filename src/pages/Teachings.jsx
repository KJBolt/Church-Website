import React from 'react';
import FooterExtra from '../components/FooterExtra';
import Navbar from '../components/Navbar';
import Featured from '../components/TeachingsContent/Featured';
import SundayTeachings from '../components/TeachingsContent/SundayTeachings';
import Videos from '../components/Videos';

function Teachings() {
  return (
    <div>
        <Navbar />
        <Featured />
        <SundayTeachings />
        <Videos />
        <FooterExtra />
    </div>
  )
}

export default Teachings