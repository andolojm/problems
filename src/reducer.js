import {
  ADD_GROUP,
  ADD_PROBLEM,
  OPEN_PROBLEM_MODAL,
  CHANGE_PROBLEM_GROUP_SELECTION,
  OPEN_GROUP_MODAL,
  DELETE_MODAL_ITEM,
  RESET_STATE,
  BOOTSTRAP_STATE,
  CLOSE_MODALS,
  SUBMIT_GROUP_TITLE_EDIT
} from "./actions";
import StateManager from "./state";

export default (state = StateManager.getState(), action) => {
  switch (action.type) {
    case ADD_GROUP:
      const newGroupId = StateManager.generateStateId(state, "group");
      return Object.assign({}, state, {
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
              name: action.groupName,
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
        problem: {
          allIds: [...state.problem.allIds, newProblemId],
          byId: [
            ...state.problem.byId,
            {
              id: newProblemId,
              text: action.problemName
            }
          ]
        }
      });
    case CHANGE_PROBLEM_GROUP_SELECTION:
      return Object.assign({}, state, {
        problemGroupSelectionId: action.groupId
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
        modalProblem: ""
      });
    case DELETE_MODAL_ITEM:
      if (action.item.includes("problem")) {
        return getStateWithoutProblem(state, action.item);
      } else {
        return getStateWithoutGroup(state, action.item);
      }
    case SUBMIT_GROUP_TITLE_EDIT:
      return Object.assign({}, state, {
        group: {
          allIds: state.group.allIds,
          byId: state.group.byId.map(it =>
            it.id === state.modalGroup
              ? Object.assign({}, it, { name: action.groupName })
              : it
          )
        }
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
