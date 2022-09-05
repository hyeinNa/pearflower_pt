import React from 'react'
import './Login.css';

export default function Login() {
  return (
    <div className='background'>
      <div className="page">
        <div className="titleWrap">
          로그인
        </div>
      

        <div className='contentWrap'>
        <div className='InputWrap'>
          <input className='input'></input>
        </div>

        <div className='InputWrap'>
          <input className='input'></input>
        </div>
        </div>

        <div className='buttonWrap'>
          <button id='apply'>회원가입</button>
          <button id='confirm'>확인</button>
        </div>
      </div>
    </div>
  )
}
