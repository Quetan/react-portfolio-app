import React from 'react'
import './Button.css'

import { motion } from 'framer-motion'

export default function Button(props) {
  return (
    <motion.button
      type='button' 
      className={'btn ' + props.buttonModifier} 
      onClick={props.buttonClickHandler}
      disabled={props.isButtonDisabled}
      whileTap={!props.isButtonDisabled && { scale: 0.8 }}
      transition={!props.isButtonDisabled && { duration: 0.5 }}
    >
      {props.buttonValue}
    </motion.button>
  )
}
