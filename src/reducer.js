import {
  ADD_GROUP,
  ADD_PROBLEM,
  CHANGE_GROUP_INPUT_TEXT,
  CHANGE_PROBLEM_INPUT_TEXT,
  OPEN_PROBLEM_MODAL,
  CHANGE_PROBLEM_GROUP_SELECTION,
  OPEN_GROUP_MODAL,
  DELETE_MODAL_ITEM,
  RESET_STATE,
  BOOTSTRAP_STATE,
  CLOSE_MODALS,
  TOGGLE_HEADER_PROBLEM,
  TOGGLE_HEADER_GROUP,
  CANCEL_HEADER_SUBMISSION,
  SUBMIT_GROUP_TITLE_EDIT,
  CHANGE_GROUP_EDIT_TEXT,
  CANCEL_GROUP_TITLE_EDIT,
  CANCEL_GROUP_DELETION
} from "./actions";
import StateManager from "./state";

export default (state = StateManager.getState(), action) => {
  switch (action.type) {
    case ADD_GROUP:
      const newGroupId = StateManager.generateStateId(state, "group");
      return Object.assign({}, state, {
        groupExpanded: false,
        problemGroupSelectionId:
          state.group.allIds.length > 0
            ? state.problemGroupSelectionId
            : newGroupId,
        group: {
          allIds: [...state.group.allIds, newGroupId],
          byId: [
            ...state.group.byId,
            {
              id: newGroupId,
              name: state.groupInputText,
              problems: []
            }
          ]
        }
      });
    case ADD_PROBLEM:
      const newProblemId = StateManager.generateStateId(state, "problem");
      state.group.byId
        .find(it => it.id === state.problemGroupSelectionId)
        .problems.push(newProblemId);

      return Object.assign({}, state, {
        problemExpanded: false,
        problem: {
          allIds: [...state.problem.allIds, newProblemId],
          byId: [
            ...state.problem.byId,
            {
              id: newProblemId,
              text: state.problemInputText
            }
          ]
        }
      });
    case CHANGE_GROUP_INPUT_TEXT:
      return Object.assign({}, state, {
        groupInputText: action.value
      });
    case CHANGE_PROBLEM_GROUP_SELECTION:
      return Object.assign({}, state, {
        problemGroupSelectionId: action.groupId
      });
    case CHANGE_PROBLEM_INPUT_TEXT:
      return Object.assign({}, state, {
        problemInputText: action.value
      });
    case OPEN_PROBLEM_MODAL:
      return Object.assign({}, state, {
        modalProblem: action.problem
      });
    case OPEN_GROUP_MODAL:
      return Object.assign({}, state, {
        modalGroup: action.group
      });
    case CLOSE_MODALS:
      return Object.assign({}, state, {
        modalGroup: "",
        modalProblem: "",
        groupEditExpanded: false,
        groupDeleteExpanded: false
      });
    case DELETE_MODAL_ITEM:
      if (action.item.includes("problem")) {
        return getStateWithoutProblem(state, action.item);
      } else {
        if (state.groupDeleteExpanded) {
          return getStateWithoutGroup(state, action.item);
        } else {
          return Object.assign({}, state, {
            groupDeleteExpanded: true,
            groupEditExpanded: false
          });
        }
      }
    case TOGGLE_HEADER_PROBLEM:
      return Object.assign({}, state, {
        problemExpanded: true,
        groupExpanded: false
      });
    case TOGGLE_HEADER_GROUP:
      return Object.assign({}, state, {
        groupExpanded: true,
        problemExpanded: false
      });
    case CANCEL_HEADER_SUBMISSION:
      return Object.assign({}, state, {
        groupExpanded: false,
        problemExpanded: false
      });
    case CHANGE_GROUP_EDIT_TEXT:
      return Object.assign({}, state, {
        groupEditInputText: action.value
      });
    case SUBMIT_GROUP_TITLE_EDIT:
      if (!state.groupEditExpanded) {
        return Object.assign({}, state, {
          groupEditExpanded: true,
          groupDeleteExpanded: false
        });
      } else {
        return Object.assign({}, state, {
          groupEditExpanded: false,
          group: {
            allIds: state.group.allIds,
            byId: state.group.byId.map(
              it =>
                it.id === state.modalGroup
                  ? Object.assign({}, it, { name: state.groupEditInputText })
                  : it
            )
          }
        });
      }
    case CANCEL_GROUP_TITLE_EDIT:
      return Object.assign({}, state, {
        groupEditExpanded: false
      });
    case CANCEL_GROUP_DELETION:
      return Object.assign({}, state, {
        groupDeleteExpanded: false
      });
    case RESET_STATE:
      return StateManager.getNullState();
    case BOOTSTRAP_STATE:
      return StateManager.getBootstrappedState();
    default:
      return state;
  }
};

// Return a version of the state with one problem removed
const getStateWithoutProblem = (state, problem) =>
  Object.assign({}, state, {
    modalProblem: "",
    problem: {
      allIds: [...state.problem.allIds.filter(it => it !== state.modalProblem)],
      byId: [...state.problem.byId.filter(it => it.id !== state.modalProblem)]
    }
  });

// Return a version of the state with one group removed
const getStateWithoutGroup = (state, group) => {
  const problems = state.group.byId.find(it => it.id === group).problems;
  return Object.assign({}, state, {
    modalGroup: "",
    groupDeleteExpanded: false,
    problem: {
      allIds: [...state.problem.allIds.filter(it => !problems.includes(it))],
      byId: [...state.problem.byId.filter(it => !problems.includes(it.id))]
    },
    group: {
      allIds: [...state.group.allIds.filter(it => it !== state.modalGroup)],
      byId: [...state.group.byId.filter(it => it.id !== state.modalGroup)]
    }
  });
};
