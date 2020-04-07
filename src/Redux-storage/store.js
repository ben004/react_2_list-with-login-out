import { createStore } from 'redux'
import reducer from './Reducer'
import { devToolsEnhancer } from 'redux-devtools-extension'
import * as actionCreators from './action'
const store = createStore(reducer,devToolsEnhancer({ actionCreators,serialize: true ,trace : true}))

export default store