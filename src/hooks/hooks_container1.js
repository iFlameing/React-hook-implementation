import React, {useState, useEffect, useReducer, useContext} from 'react';
import * as Reducer from '../store/hookState/hookreducer'
import * as actions from '../store/actions/actions'
import Context from '../utils/context'


const hooksContainer1 = () => {

    const [stateValue, setValue] = useState(0);
    const [effectValue, setEffectValue] = useState(null);
    const [state, dispatch] = useReducer(Reducer.HooksReducer1, Reducer.initialState)
    const context = useContext(Context);


    useEffect(() => {
        setTimeout(()=> setEffectValue("this is the effect value"),300);
    },[stateValue])

    const handleSuccessDispatch = () => {
        dispatch(actions.success());
    }

    const handleFailureDispatch = () => {
        dispatch(actions.failure());
    }

    return(
      <div>
          <h1>{stateValue}</h1>
          <button onClick={()=>{ setValue(stateValue+1)}}>Increment the count</button>
          <button onClick={()=>{ setValue(stateValue-1)}}>decrement the count</button>
          {effectValue ? <p>{effectValue}</p> : <p>No Value</p>}
          <button onClick={()=>setEffectValue("some string")}>set the effect Value</button>
          <button onClick={()=>handleSuccessDispatch()}>Dispatch True</button>
          <button onClick={()=>handleFailureDispatch()}>Dispatch False</button>
          {
              state.stateprop1 ? <p> State prop1 is true</p> : <p> State is prop1 is false</p>
          }
          <p>this is global state using useState{context.valueOfGlobalState}</p>
          <button onClick={()=>{ context.addToGlobalState()}}>Increment the Global state</button>
          <button onClick={()=>{ context.subGlobalStateValue()}}>decrement the Global state</button>
          {
              context.stateContext ? <p>stateContext is true using useReducer</p> : <p>state context is false using useReducer</p> 
          }
          <button onClick={()=>{ context.changeTrueToContextGlobal()}}>Change the contextGlobal to true</button>
          <button onClick={()=>{ context.changeFalseToContextGlobal()}}>Change the contextGlobal to false</button>


      </div>
    )
}


export default hooksContainer1;
