import React from 'react'
import './main.css';
import Header from './Header';
import EventInfo from './EventInfo';
import GameInfo from './GameInfo';
import Footer from './Footer';

export default function main() {
  return (
    <div>
        <div className='background'>
        <Header/>
        <EventInfo />
        <GameInfo/>
        <Footer />
        </div>
    </div>
    )
}
  