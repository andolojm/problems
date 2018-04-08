const getDefaultState = () => ({
  groupInputText: '',
  problemInputText: '',
  problemGroupSelectionId: '',
  modalProblem: '',
  modalSection: '',
  section: {
    byId: [],
    allIds: []
  },
  problem: {
    byId: [],
    allIds: []
  }
})

// Return a sample state for development purposes
const getBootstrappedState = () => {
  const state = getDefaultState()
  state.problemGroupSelectionId = 'section1'
  state.section = {
    byId: [
      { id: 'section1', name: 'General', problems: ['problem1', 'problem2']},
      { id: 'section2', name: 'Work', problems: ['problem3']},
      { id: 'section3', name: 'Home', problems: []},
    ],
    allIds: ['section1', 'section2', 'section3']
  }
  state.problem = {
    byId: [
      { id: 'problem1', text: 'My taxes are overdue' },
      { id: 'problem2', text: 'Grandma needs her PC fixed' },
      { id: 'problem3', text: 'I have not been able to innovate' }
    ],
    allIds: ['problem1', 'problem2', 'problem3']
  }

  return state
}

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

  getNullState: () => getDefaultState(),

  getBootstrappedState: () => getBootstrappedState(),

  persistState: (state) => {
    persistToLocalStorage(state)
    persistToServer(state)
  },

  // Generate ID for an object of specified prefix
  // Return <prefix><X> where X = the highest current ID + 1 (or 1, if no current IDs)
  generateStateId: (state, prefix) => {
    let id = "1"

    const ids = state[prefix].allIds.map(it => parseInt(it.substring(prefix.length), 10))

    if(ids.length > 0) {
      id = (Math.max(...ids) + 1).toString()
    }

    return prefix + id
  }
}
