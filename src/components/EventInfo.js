import React from 'react';
import './EventInfo.css';
import progressImg from '../img/info-progress.png'

export default function EventInfo() {
    return (
        <div className='info-top-container'>
            <div className='info-container'>
                <div>EventInfo</div>
            </div>
            <div>
                <img id='info-progress-back' src={progressImg} />
            </div>
        </div>

    )
}