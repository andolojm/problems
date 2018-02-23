import React from 'react'

export default ({section, problems}) => (
  <div>
    <h2>Section {section.name}</h2>
    <div>
      {problems.map(it => (<p key={it.id}>- {it.text}</p>))}
    </div>
  </div>
)