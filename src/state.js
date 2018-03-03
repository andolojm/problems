const getDefaultState = () => ({
  groupInputText: '',
  problemInputText: '',
  problemGroupSelectionId: '',
  modalProblem: '',
  section: {
    byId: [],
    allIds: []
  },
  problem: {
    byId: [],
    allIds: []
  }
})

const retrieveFromLocalStorage = () => {
  try {
    const state = localStorage.getItem('problems_state')
    return state ? JSON.parse(state) : undefined
  } catch (e) {
    console.error('Error retrieving state from localStorage: ' + e)
    return undefined
  }
}

const persistToLocalStorage = state => {
  try {
    localStorage.setItem('problems_state', JSON.stringify(state))
  } catch (e) {
    console.error('Error persisting state to localStorage: ' + e)
  }
}

const persistToServer = state => {
  // TODO
}

export default {
  getState: () => {
    const storedState = retrieveFromLocalStorage()
    return storedState ? storedState : getDefaultState()
  },
  persistState: (state) => {
    persistToLocalStorage(state)
    persistToServer(state)
  }
}
