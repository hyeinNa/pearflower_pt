import React from 'react';
import gameLabel from '../img/gamelabel.png';
import './GameInfo.css';

export default function GameInfo() {
    return (
        <div className='game-container'>
            <img id='gameLabel' src={gameLabel} />
            <div className='game-list-container'>
                <div className='game-box'>
                    <div className='game-img'></div>
                    <div className='game-howtoplay'>packingGame</div>
                </div>
                <div className='game-box'>
                    <div className='game-img'></div>
                    <div className='game-howtoplay'>movingGame</div>
                </div>
                <div className='game-box'>
                    <div className='game-img'></div>
                    <div className='game-howtoplay'>windowGame</div>
                </div>
            </div>
        </div>
    )
}