import React from 'react'
import Section from '../Section/Section'

export default ({ sections }) => (
  <div id="section-container">
    {sections.map(it => <Section key={it.id} id={it.id} />)}
  </div>
)
