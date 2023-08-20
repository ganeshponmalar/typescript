import { useReducer } from "react"


type CounterState = {
    count: number
}


  type UpdateAction = {

    type: 'increment' | 'decrement',

    payload: number
}

 type ResetAction = {

    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction



const initialState = {count: 0}

function reducer(state: CounterState, action:CounterAction){  //reducer used to update the state and haveing two parameters

    switch(action.type){ //based on the action type it update the values

        case 'increment':
            return {count: state.count + action.payload}

            case 'decrement':
                return {count: state.count - action.payload}

                case 'reset':
                    return initialState

                default: 
                return state
    }
}


export const Counter = ()=>{

const [state, dispatch] = useReducer(reducer,initialState)

return(
    < >
    count:{state.count}

    <button onClick={()=>dispatch({type:'increment',payload: 10})}>
        Increment 10
    </button>

    <button onClick={()=> dispatch({type:'decrement',payload: 10})}>
     Decrement 10
    </button>

    <button onClick={()=> dispatch({type: 'reset'})}>

   Reset
    </button>
    
    </>

)
}