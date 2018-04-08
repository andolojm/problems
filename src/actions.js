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

export const OPEN_SECTION_MODAL = 'OPEN_SECTION_MODAL'
export const openSectionModal = section => ({
  type: OPEN_SECTION_MODAL,
  section
})

export const DELETE_MODAL_ITEM = 'DELETE_MODAL_ITEM'
export const deleteModalItem = item => ({
  type: DELETE_MODAL_ITEM,
  item
})

export const RESET_STATE = 'RESET_STATE'
export const resetState = () => ({
  type: RESET_STATE,
})

export const BOOTSTRAP_STATE = 'BOOTSTRAP_STATE'
export const bootstrapState = () => ({
  type: BOOTSTRAP_STATE,
})

export const CLOSE_MODALS = 'CLOSE_MODALS'
export const closeModals = () => ({
  type: CLOSE_MODALS,
})

export const TOGGLE_HEADER_PROBLEM = 'TOGGLE_HEADER_PROBLEM'
export const toggleHeaderProblem = () => ({
  type: TOGGLE_HEADER_PROBLEM,
})

export const TOGGLE_HEADER_SECTION = 'TOGGLE_HEADER_SECTION'
export const toggleHeaderSection = () => ({
  type: TOGGLE_HEADER_SECTION,
})