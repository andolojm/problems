import React from 'react'
import Button from '../Button/Button'

export default ({section, problems, onProblemClick}) => (
  <div className="section">
    <hr className="section-top-hr" />
    <h2 className="section-header">{section.name}</h2>
    <div className="section-problems">
      {problems.map(it => (
        <Button key={it.id} actionId={it.id} onButtonClick={(e) => onProblemClick(e)}>
          {it.text}
        </Button>
      ))}
    </div>
  </div>
)