import {createStore,combineReducer,applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const reducers=combineReducer({

})
const store=createSrtore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
export default store