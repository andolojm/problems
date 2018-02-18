export const ADD_GROUP = 'ADD_GROUP'
export const addGroup = (name) => ({
  type: ADD_GROUP,
  name
})

export const CHANGE_GROUP_INPUT_TEXT = 'CHANGE_GROUP_INPUT_TEXT'
export const changeGroupInputText = (value) => ({
  type: CHANGE_GROUP_INPUT_TEXT,
  value
})

export const CHANGE_PROBLEM_INPUT_TEXT = 'CHANGE_PROBLEM_INPUT_TEXT'
export const changeProblemInputText = (value) => ({
  type: CHANGE_PROBLEM_INPUT_TEXT,
  value
})