import React from 'react'
import ModalContentGroup from '../ModalContentGroup/ModalContentGroup'
import ModalContentProblem from '../ModalContentProblem/ModalContentProblem'

export default ({isProblem, isSection}) => {
  if(isProblem || isSection) {
    return (
      <div>
        <div id="modal-underlay"></div>
        <div id="modal">
          {isProblem ?
            (<ModalContentProblem />) :
            (<ModalContentGroup />)}
        </div>
      </div>
    )
  } else {
    return null
  }
}