import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Components/Root/Root'
import { createStore } from 'redux'
import reducer from './reducer'
import { addGroup } from './actions'
import { Provider } from 'react-redux'

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)