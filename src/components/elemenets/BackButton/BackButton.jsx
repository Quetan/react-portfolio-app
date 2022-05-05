import React from 'react'
import { Link } from 'react-router-dom'
import './BackButton.css'

import { useNavigate } from "react-router-dom";

export default function BackButton() {
    let history = useNavigate();
  return (
    <button className='backButton btn' onClick={() => history(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 40 8 24 24 8 26.1 10.1 13.7 22.5H40V25.5H13.7L26.1 37.9Z"/></svg>
    </button>
  )
}
