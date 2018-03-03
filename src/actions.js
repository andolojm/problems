export const ADD_GROUP = 'ADD_GROUP'
export const addGroup = () => ({
  type: ADD_GROUP
})

export const ADD_PROBLEM = 'ADD_PROBLEM'
export const addProblem = () => ({
  type: ADD_PROBLEM
})

export const CHANGE_PROBLEM_GROUP_SELECTION = 'CHANGE_PROBLEM_GROUP_SELECTION'
export const changeProblemGroupSelection = groupId => ({
  type: CHANGE_PROBLEM_GROUP_SELECTION,
  groupId
})

export const CHANGE_GROUP_INPUT_TEXT = 'CHANGE_GROUP_INPUT_TEXT'
export const changeGroupInputText = value => ({
  type: CHANGE_GROUP_INPUT_TEXT,
  value
})

export const CHANGE_PROBLEM_INPUT_TEXT = 'CHANGE_PROBLEM_INPUT_TEXT'
export const changeProblemInputText = value => ({
  type: CHANGE_PROBLEM_INPUT_TEXT,
  value
})

export const OPEN_PROBLEM_MODAL = 'OPEN_PROBLEM_MODAL'
export const openProblemModal = problem => ({
  type: OPEN_PROBLEM_MODAL,
  problem
})

export const DELETE_MODAL_PROBLEM = 'DELETE_MODAL_PROBLEM'
export const deleteModalProblem = problem => ({
  type: DELETE_MODAL_PROBLEM,
  problem
})
