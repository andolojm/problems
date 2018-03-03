import {
  ADD_GROUP, ADD_PROBLEM, CHANGE_GROUP_INPUT_TEXT,
  CHANGE_PROBLEM_INPUT_TEXT, OPEN_PROBLEM_MODAL,
  CHANGE_PROBLEM_GROUP_SELECTION,
  DELETE_MODAL_PROBLEM, RESET_STATE, BOOTSTRAP_STATE
} from './actions'
import StateManager from './state'

export default (state = StateManager.getState(), action) => {
  switch (action.type) {
    case ADD_GROUP:
      const newSectionId = StateManager.generateStateId(state, "section")
      return Object.assign({}, state, {
        problemGroupSelectionId: (state.section.allIds.length > 0
          ? state.problemGroupSelectionId
          : newSectionId),
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
      const newProblemId = StateManager.generateStateId(state, "problem")
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
    case OPEN_PROBLEM_MODAL:
      return Object.assign({}, state, {
        modalProblem: action.problem
      })
    case DELETE_MODAL_PROBLEM:
      return Object.assign({}, state, {
        modalProblem: '',
        problem: {
          allIds: [...state.problem.allIds.filter((it) => it !== state.modalProblem)],
          byId: [...state.problem.byId.filter((it => it.id !== state.modalProblem))]
        },
      })
    case RESET_STATE:
      return StateManager.getNullState()
    case BOOTSTRAP_STATE:
      return StateManager.getBootstrappedState()
    default:
      return state
  }
}