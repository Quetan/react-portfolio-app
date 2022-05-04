import React from 'react'
import './Works.css'

import PageNumber from '../../PageNumber/PageNumber'

export default function Works(props) {
  return (
    <section className="section works-section">
        <PageNumber number={props.pageNumber} />
    </section>
  )
}
