import {
  ADD_GROUP, ADD_PROBLEM, CHANGE_GROUP_INPUT_TEXT,
  CHANGE_PROBLEM_INPUT_TEXT,
  CHANGE_PROBLEM_GROUP_SELECTION
} from './actions'

const initState = {
  groupInputText: '',
  problemInputText: '',
  problemGroupSelectionId: 'section1',
  section: {
    byId: [
      {
        id: 'section1',
        name: 'General',
        problems: ['problem1']
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
      const newSectionId = generateId(state, "section")
      return Object.assign({}, state, {
        section: {
          allIds: [...state.section.allIds, newSectionId],
          byId: [...state.section.byId, {
            id: newSectionId,
            name: state.groupInputText,
            problems: []
          }]
        }
      })
    case ADD_PROBLEM:
      const newProblemId = generateId(state, "problem")
      state.section.byId.find(
        it => it.id === state.problemGroupSelectionId)
        .problems.push(newProblemId)

      return Object.assign({}, state, {
        problem: {
          allIds: [...state.problem.allIds, newProblemId],
          byId: [...state.problem.byId, {
            id: newProblemId,
            text: state.problemInputText,
          }]
        }
      })
    case CHANGE_GROUP_INPUT_TEXT:
      return Object.assign({}, state, {
        groupInputText: action.value
      })
    case CHANGE_PROBLEM_GROUP_SELECTION:
      return Object.assign({}, state, {
        problemGroupSelectionId: action.groupId
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