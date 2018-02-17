import { ADD_GROUP } from './actions'

const initState = {
  groups: [
    {
      name: 'General',
      problems: [
        {
          text: 'Figure this app out'
        }
      ]
    }
  ]
}

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return Object.assign({}, state, {
        groups: [...state.groups, {
          name: action.name,
          problems: []
        }]
      })
    default:
      return state
  }
}