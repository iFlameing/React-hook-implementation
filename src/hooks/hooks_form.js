import React, { useState, useReducer, useContext} from 'react'
import * as Reducer from '../store/hookState/hookreducerform'
import * as actions from '../store/actions/actions'
import Context from '../utils/context'


const HookForm = () => {

    const [valueChange, setValueChange] = useState('')
    const  [ valueSubmit, setValueSubmit] = useState('')
    const [state, dispatch] = useReducer(Reducer.UserReducer, Reducer.initialState)
    const context = useContext(Context);

    const handleValueChange = (event) => {
        setValueChange(event.target.value)
    }

    const handleSubmitValue = (event) => {
        event.preventDefault()
        setValueSubmit(event.target.useState.value)
    }

    const handleuseReducerChange = (event) => {
        dispatch(actions.user_input_change(event.target.value))
    }
    const handleuseReducerSubmit = (event) => {
        event.preventDefault()
        dispatch(actions.user_input_submit(event.target.user.value))
    }
    return (
        <div>
            <p> this is from hook form </p>
            <form onSubmit={handleSubmitValue}>
                <label>React useState:</label>
                <input id='useState' type='text' onChange={handleValueChange} />
                <button  type='submit'>Submit</button>
            </form>

            <p>this is the value of : {valueChange}</p>
            <p>this is the value of final : {valueSubmit}</p>


            <p>this is the new form</p>
            <form onSubmit={handleuseReducerSubmit}>
                <label>React useReducer:</label>
                <input id='user' type='text' onChange={handleuseReducerChange} />
                <button  type='submit'>Submit</button>
            </form>

            <p>this is the value of onchange due to useReducer : {state.user_text_change}</p>
            <p>this is the value of final onchange due to useReducer : {state.user_text_submit}</p>

            <p>This is the new form using global state</p>
            <form onSubmit={context.HandleSubmitChange}>
                <label>React useContext:</label>
                <input id='userContext' type='text' onChange={context.HandleInputChange} />
                <button  type='submit'>Submit</button>
            </form>
            <p>this is the value of onchange due to useReducer : {context.stateUserInputChange}</p>
            <p>this is the value of final onchange due to useReducer : {context.stateUserSubmit}</p>


        </div>
    )
}

export default HookForm;