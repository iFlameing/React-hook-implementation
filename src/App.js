import React, {useState, useReducer} from 'react';
import Routes from './routes';
import Context from './utils/context'
import * as Reducer from './store/hookState/hookreducer'
import * as ReducerUser from './store/hookState/hookreducerform'
import * as actions from './store/actions/actions'



const App = () => {

  const [globalStateValue, setGlobalStateValue] = useState(0);
  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer1, Reducer.initialState)
  const [stateUser, dispatchUser] = useReducer(ReducerUser.UserReducer, ReducerUser.initialState)

  const incrementStateContextGlobal = () => {
    console.log("this is running")
    dispatchContextGlobal(actions.success())
  }
  
  const decrementStateContexGlobal = () => {
    dispatchContextGlobal(actions.failure())
  }
  const handleuseReducerChange = (event) => {
    dispatchUser(actions.user_input_change(event.target.value))
}
const handleuseReducerSubmit = (event) => {
    event.preventDefault()
    event.persist()
    dispatchUser(actions.user_input_submit(event.target.userContext.value))
}

    return(
      <div>
      React App Page
      <Context.Provider value={{
        valueOfGlobalState: globalStateValue,
        addToGlobalState: () => setGlobalStateValue(globalStateValue+1),
        subGlobalStateValue: () => setGlobalStateValue(globalStateValue-1),
        stateContext:stateContextGlobal.stateprop2,
        changeTrueToContextGlobal: () => incrementStateContextGlobal(),
        changeFalseToContextGlobal: () => decrementStateContexGlobal(),
        stateUserInputChange: stateUser.user_text_change,
        stateUserSubmit: stateUser.user_text_submit,
        HandleInputChange: (event)=> handleuseReducerChange(event),
        HandleSubmitChange: (event) => handleuseReducerSubmit(event),
      }}>
        <Routes />
      </Context.Provider>
      </div>
    )
}


export default App;
