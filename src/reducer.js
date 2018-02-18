import { ADD_GROUP, CHANGE_GROUP_INPUT_TEXT, CHANGE_PROBLEM_INPUT_TEXT } from './actions'

const initState = {
  groupInputText: '',
  problemInputText: '',
  problemGroupSelectionId: '',
  section: {
    byId: [
      {
        id: 'section1',
        name: 'General',
        problems: [1]
      }
    ],
    allIds: ['section1']
  },
  problem: {
    byId: [
      {
        id: 'problem1',
        text: 'Figure this app out'
      }
    ],
    allIds: ['problem1']
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      const newId = generateId(state, "section")
      const obj = Object.assign({}, state, {
        groupInputText: '',
        section: {
          allIds: [...state.section.allIds, newId],
          byId: [...state.section.byId, {
            id: newId,
            name: state.groupInputText,
            problems: []
          }]
        }
      })
      console.log(obj)
      return obj
    case CHANGE_GROUP_INPUT_TEXT:
      return Object.assign({}, state, {
        groupInputText: action.value
      })
    case CHANGE_PROBLEM_INPUT_TEXT:
      return Object.assign({}, state, {
        problemInputText: action.value
      })
    default:
      return state
  }
}

const generateId = (state, prefix) => {
  return prefix + (1 + Math.max(...state[prefix].allIds
      .map(it => parseInt(it.substring(it.length - 1), 10)))).toString()
}