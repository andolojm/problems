import React from 'react'
import Button from '../Button/Button'

export default ({section, problems, onProblemClick, onSectionClick}) => (
  <div className="section">
    <h2 className="section-header" onClick={() => onSectionClick(section.id)}>
      {section.name}
    </h2>
    <div className="section-problems">
      {problems.map(it => (
        <div key={it.id} className="section-problem-button">
          <Button actionId={it.id} onButtonClick={(e) => onProblemClick(e)}>
            {it.text}
          </Button>
        </div>
      ))}
    </div>
  </div>
)