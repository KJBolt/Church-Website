import React from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/TeachingsContent/Featured';
import SundayTeachings from '../components/TeachingsContent/SundayTeachings';
import Videos from '../components/Videos';
import Arrow from "../components/Arrow";

function Teachings() {
  return (
    <div>
        <Navbar />
        <Featured />
        <SundayTeachings />
        <Videos />
        <Arrow/>
    </div>
  )
}

export default Teachings