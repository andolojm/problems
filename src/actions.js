export const ADD_GROUP = "ADD_GROUP";
export const addGroup = groupName => ({
  type: ADD_GROUP,
  groupName
});

export const ADD_PROBLEM = "ADD_PROBLEM";
export const addProblem = problemName => ({
  type: ADD_PROBLEM,
  problemName
});

export const CHANGE_PROBLEM_GROUP_SELECTION = "CHANGE_PROBLEM_GROUP_SELECTION";
export const changeProblemGroupSelection = groupId => ({
  type: CHANGE_PROBLEM_GROUP_SELECTION,
  groupId
});

export const OPEN_PROBLEM_MODAL = "OPEN_PROBLEM_MODAL";
export const openProblemModal = problem => ({
  type: OPEN_PROBLEM_MODAL,
  problem
});

export const OPEN_GROUP_MODAL = "OPEN_GROUP_MODAL";
export const openGroupModal = group => ({
  type: OPEN_GROUP_MODAL,
  group
});

export const DELETE_MODAL_ITEM = "DELETE_MODAL_ITEM";
export const deleteModalItem = item => ({
  type: DELETE_MODAL_ITEM,
  item
});

export const RESET_STATE = "RESET_STATE";
export const resetState = () => ({
  type: RESET_STATE
});

export const BOOTSTRAP_STATE = "BOOTSTRAP_STATE";
export const bootstrapState = () => ({
  type: BOOTSTRAP_STATE
});

export const CLOSE_MODALS = "CLOSE_MODALS";
export const closeModals = () => ({
  type: CLOSE_MODALS
});

export const SUBMIT_GROUP_TITLE_EDIT = "SUBMIT_GROUP_TITLE_EDIT";
export const submitGroupTitleEdit = groupName => ({
  type: SUBMIT_GROUP_TITLE_EDIT,
  groupName
});
