import React from 'react'
import './PageNumber.css'

export default function PageNumber(props) {
  return (
    <span className='page-number'>{props.number}</span>
  )
}
