import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import DevUtils from '../DevUtils/DevUtils'
import Button from '../Button/Button'

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
    <DevUtils />
    <div className="header-input-group">
      <CSSTransitionGroup
        transitionName="header-input"
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}>
        {problemExpanded &&
          <div key={1} className="header-input-group-line header-inputs">
            <input type="text" id="problemtext" value={problemInputText}
                onChange={e => onProblemTextChange(e.target.value)} />
            <select onChange={e => onProblemGroupSelectionChange(e.target.value)}
                value={problemGroupSelection}>
              {groupList.map(it => (
                <option key={it.id} value={it.id}>{it.name}</option>
              ))}
            </select>
          </div>
        }
      </CSSTransitionGroup>
      <div className="header-input-group-line">
        <Button onButtonClick={problemExpanded ? onNewProblemClick : onToggleProblem}>
          Submit new problem
        </Button>
      </div>
    </div>
    <div className="header-input-group">
      <CSSTransitionGroup
        transitionName="header-input"
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}>
        {sectionExpanded &&
          <div className="header-input-group-line header-inputs">
            <input type="text" id="groupname" value={groupInputText}
                onChange={e => onGroupTextChange(e.target.value)} />
          </div>
        }
      </CSSTransitionGroup>
      <div className="header-input-group-line">
        <Button onButtonClick={sectionExpanded ? onNewGroupClick : onToggleSection}>
          Submit new group
        </Button>
      </div>
    </div>
  </div>
)