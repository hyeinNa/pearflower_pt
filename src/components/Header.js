import React from 'react';
import Nav from "../img/nav.png";
import logoKR from '../img/logoKR.png';
import dday from '../img/ddaylogin.png';
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header-container'>
            <div className='header-list-container'>
                <div>
                    <img id ='Nav' src={Nav}/>
                </div>
                <div className='header-right'>
                    <div className='dday'>
                        <Link to="./Login">
                        <img id ='dday' src={dday}/>
                        </Link>
                    </div>
                    <div className='logoKR'>
                        <img id ='logoKR' src={logoKR}/>
                    </div>
                </div>
            </div>
        </div>
    )
}