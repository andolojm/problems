export interface StateProblem {
  id: string,
  text: string
}
export interface StateProblems {
  allIds: string[],
  byId: StateProblem[]
}
export interface StateGroup {
  id: string,
  problems: string[],
  name: string
}
export interface StateGroups { 
  allIds: string[],
  byId: StateGroup[]
}
export interface StateObject {
  problem: StateProblems,
  group: StateGroups,
  modalGroup: string,
  modalProblem: string,
  problemGroupSelectionId: string
}

function getDefaultState(): StateObject {
  return {
    problemGroupSelectionId: "",
    modalProblem: "",
    modalGroup: "",
    group: {
      byId: [],
      allIds: []
    },
    problem: {
      byId: [],
      allIds: []
    }
  }
};

// Return a sample state for development purposes
const getBootstrappedState = () => {
  const state: StateObject = getDefaultState();
  state.problemGroupSelectionId = "group1";
  state.group = {
    byId: [
      {
        id: "group1",
        name: "General",
        problems: ["problem1", "problem2"]
      },
      {
        id: "group2",
        name: "Work",
        problems: ["problem3", "problem4", "problem6", "problem7"]
      },
      {
        id: "group3",
        name: "Home",
        problems: ["problem5"]
      },
      {
        id: "group4",
        name: "Holidays",
        problems: []
      }
    ],
    allIds: ["group1", "group2", "group3", "group4"]
  };
  state.problem = {
    byId: [
      { id: "problem1", text: "My taxes are overdue" },
      { id: "problem2", text: "Grandma needs her PC fixed" },
      { id: "problem3", text: "Copier smells like burnt plastic" },
      { id: "problem4", text: "My stapler has gone missing" },
      { id: "problem5", text: "Cat chewed through speaker wire" },
      { id: "problem6", text: "I don't know how to tie a tie" },
      { id: "problem7", text: "Y2K broke the coffee machine" }
    ],
    allIds: [
      "problem1",
      "problem2",
      "problem3",
      "problem4",
      "problem5",
      "problem6",
      "problem7"
    ]
  };

  return state;
};

const retrieveFromLocalStorage = () => {
  try {
    const rawState: string | null = localStorage.getItem("problems_state");
    if(rawState) {
      const jsonState = JSON.parse(rawState);
      if (jsonState) {
        return jsonState.app;
      }
    }

    return undefined;
  } catch (e) {
    console.error("Error retrieving state from localStorage: " + e);
    return undefined;
  }
};

const persistToLocalStorage = (state: StateObject) => {
  try {
    localStorage.setItem("problems_state", JSON.stringify(state));
  } catch (e) {
    console.error("Error persisting state to localStorage: " + e);
  }
};

const persistToServer = (state: StateObject) => {
  // TODO
};

function isValidStateSegment(object: any): object is StateGroups | StateProblems {
  return "allIds" in object;
}

export default {
  getState: () => {
    const storedState = retrieveFromLocalStorage();
    return storedState ? storedState : getDefaultState();
  },

  getNullState: () => getDefaultState(),

  getBootstrappedState: () => getBootstrappedState(),

  persistState: (state: StateObject) => {
    persistToLocalStorage(state);
    persistToServer(state);
  },

  // Generate ID for an object of specified prefix
  // Return <prefix><X> where X = the highest current ID + 1 (or 1, if no current IDs)
  generateStateId: (array: any[], prefix: keyof StateObject) => {
    let id = "1";

    const ids = array.map(it =>
      parseInt(it.substring(prefix.length), 10)
    );

    if (ids.length > 0) {
      id = (Math.max(...ids) + 1).toString();
    }

    return prefix + id;
  }
};
