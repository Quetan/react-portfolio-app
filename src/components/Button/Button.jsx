import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <button
      type='button' 
      className={'btn ' + props.buttonModifier} 
      onClick={props.buttonClickHandler}
      disabled={props.isButtonDisabled}
    >
      {props.buttonValue}
    </button>
  )
}
