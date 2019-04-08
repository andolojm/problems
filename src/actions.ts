export const ADD_GROUP = "ADD_GROUP";
export const addGroup = (groupName: string) => ({
  type: ADD_GROUP,
  value: groupName
});

export const ADD_PROBLEM = "ADD_PROBLEM";
export const addProblem = (problemName: string) => ({
  type: ADD_PROBLEM,
  value: problemName
});

export const CHANGE_PROBLEM_GROUP_SELECTION = "CHANGE_PROBLEM_GROUP_SELECTION";
export const changeProblemGroupSelection = (groupId: string) => ({
  type: CHANGE_PROBLEM_GROUP_SELECTION,
  value: groupId
});

export const OPEN_PROBLEM_MODAL = "OPEN_PROBLEM_MODAL";
export const openProblemModal = (problem: string) => ({
  type: OPEN_PROBLEM_MODAL,
  value: problem
});

export const OPEN_GROUP_MODAL = "OPEN_GROUP_MODAL";
export const openGroupModal = (group: string) => ({
  type: OPEN_GROUP_MODAL,
  value: group
});

export const DELETE_MODAL_ITEM = "DELETE_MODAL_ITEM";
export const deleteModalItem = (item: string) => ({
  type: DELETE_MODAL_ITEM,
  value: item
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
export const submitGroupTitleEdit = (groupName: string) => ({
  type: SUBMIT_GROUP_TITLE_EDIT,
  value: groupName
});
