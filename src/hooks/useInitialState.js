import { useState } from 'react'

const initialState ={
    items:[]
}

const useInitialState = () =>{

    const [state,setState] = useState(initialState)

    const setItems = (payload) =>{
        setState({
            ...state,
            items:[...state.items, payload]
        })
    }
    return {
        state,
        setState,
        setItems
    }
}

export default useInitialState