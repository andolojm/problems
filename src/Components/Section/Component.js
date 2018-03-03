import React from 'react'

export default ({section, problems, onProblemClick}) => (
  <div>
    <h2>Section {section.name}</h2>
    <div>
      {problems.map(it => (
        <p key={it.id} id={it.id} onClick={(e) => onProblemClick(e)}>
          - {it.text}
        </p>
      ))}
    </div>
  </div>
)