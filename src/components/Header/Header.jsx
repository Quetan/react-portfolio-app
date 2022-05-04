import React from 'react'
import './Header.css'
import photo from '../../assets/header-face.png'

export default function Header() {
  return (
    <header className='header'>
        <div className='header-image-wrapper'>
            <div className='header-circle'>
                <img className='header-image' src={photo} alt="" />
            </div>
            <h1 className="header-title">Коркин <br /> Кирилл Сергеевич</h1>
            <span className="header-subtitle">FrontEnd Developer</span>
        </div>
    </header>
  )
}
