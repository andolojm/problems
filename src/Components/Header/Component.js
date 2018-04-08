import React from 'react'
import Transition from 'react-transition-group/Transition'
import Button from '../Button/Button'

const transitionStyles = {
  entering: { height: 0 },
  entered:  { height: '45px' },
  exiting:  { height: '45px' },
  exited:   { height: 0 }
}

export default ({
    problemInputText, groupInputText, groupList, problemGroupSelection,
    problemExpanded, sectionExpanded,
    onNewGroupClick, onProblemTextChange, onNewProblemClick,
    onGroupTextChange, onProblemGroupSelectionChange,
    onToggleSection, onToggleProblem
  }) => (
  <div id="header">
    <div>
      <h1 className="header-title">Problems</h1>
    </div>
    <div className="header-input-group">
      <Transition in={problemExpanded} classNames="header-input" timeout={200}>
        {state => (
          <div className="header-input-group-line header-transition"
              style={{...transitionStyles[state]}}>
            <input type="text" id="problemtext" value={problemInputText}
                onChange={e => onProblemTextChange(e.target.value)}
                className="header-input header-input-2-wide left"
                placeholder="Problem text" />
            <select onChange={e => onProblemGroupSelectionChange(e.target.value)}
                value={problemGroupSelection}
                className="header-input header-input-2-wide right">
              {groupList.map(it => (
                <option key={it.id} value={it.id}>{it.name}</option>
              ))}
            </select>
          </div>
        )}
      </Transition>
      <div className="header-input-group-line">
        <Button onButtonClick={problemExpanded ? onNewProblemClick : onToggleProblem}>
          Submit new problem
        </Button>
      </div>
    </div>
    <div className="header-input-group">
      <Transition in={sectionExpanded} classNames="header-input" timeout={200}>
        {state => (
          <div className="header-input-group-line header-transition"
              style={{...transitionStyles[state]}}>
            <input type="text" id="groupname" value={groupInputText}
                onChange={e => onGroupTextChange(e.target.value)}
                className="header-input header-input-1-wide"
                placeholder="Group name" />
          </div>
        )}
      </Transition>
      <div className="header-input-group-line">
        <Button onButtonClick={sectionExpanded ? onNewGroupClick : onToggleSection}>
          Submit new group
        </Button>
      </div>
    </div>
  </div>
)