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
import StateManager, { StateObject, StateGroup, StateProblem } from "./state";

interface Action {
  type: string,
  value: string | undefined
}

function reducer (state = StateManager.getState(), action: Action) {
  switch (action.type) {
    case ADD_GROUP:
      const newGroupId = StateManager.generateStateId(state.group.allIds, "group");
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
              name: action.value,
              problems: []
            }
          ]
        }
      });
    case ADD_PROBLEM:
      const newProblemId = StateManager.generateStateId(state.problem.allIds, "problem");
      state.group.byId
        .find((it: { id: string }) => it.id === state.problemGroupSelectionId)
        .problems.push(newProblemId);

      return Object.assign({}, state, {
        problem: {
          allIds: [...state.problem.allIds, newProblemId],
          byId: [
            ...state.problem.byId,
            {
              id: newProblemId,
              text: action.value
            }
          ]
        }
      });
    case CHANGE_PROBLEM_GROUP_SELECTION:
      return Object.assign({}, state, {
        problemGroupSelectionId: action.value
      });
    case OPEN_PROBLEM_MODAL:
      return Object.assign({}, state, {
        modalProblem: action.value
      });
    case OPEN_GROUP_MODAL:
      return Object.assign({}, state, {
        modalGroup: action.value
      });
    case CLOSE_MODALS:
      return Object.assign({}, state, {
        modalGroup: "",
        modalProblem: ""
      });
    case DELETE_MODAL_ITEM:
      const value: string | undefined = action.value;
      if(value) {
        if (value.includes("problem")) {
          return getStateWithoutProblem(state, value);
        } else {
          return getStateWithoutGroup(state, value);
        }
      }
      
      return state;
    case SUBMIT_GROUP_TITLE_EDIT:
      return Object.assign({}, state, {
        group: {
          allIds: state.group.allIds,
          byId: state.group.byId.map((it: { id: string }) =>
            it.id === state.modalGroup
              ? Object.assign({}, it, { name: action.value })
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

export default reducer;

// Return a version of the state with one problem removed
const getStateWithoutProblem = (state: StateObject, problem: string) =>
  Object.assign({}, state, {
    modalProblem: "",
    problem: {
      allIds: [...state.problem.allIds.filter(it => it !== state.modalProblem)],
      byId: [...state.problem.byId.filter((it => it.id !== state.modalProblem))]
    }
  });

// Return a version of the state with one group removed
const getStateWithoutGroup = (state: StateObject, group: string) => {
  const selectedGroup: StateGroup | undefined = state.group.byId.find(it => it.id === group)
  
  if(selectedGroup) {
    return Object.assign({}, state, {
      modalGroup: "",
      problem: {
        allIds: [...state.problem.allIds.filter(it => !selectedGroup.problems.includes(it))],
        byId: [...state.problem.byId.filter(it => !selectedGroup.problems.includes(it.id))]
      },
      group: {
        allIds: [...state.group.allIds.filter(it => it !== state.modalGroup)],
        byId: [...state.group.byId.filter(it => it.id !== state.modalGroup)]
      }
    });
  }

  return state;
};
