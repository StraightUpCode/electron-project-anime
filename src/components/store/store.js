import createStore from "unistore";

const initialState = {
    count : 0,
    token:{}    
}


export let store = createStore(initialState)

export let actions = store =>({
    increment: (state)=> ({count: state.count+1}) ,
    setToken: (state,object) => {
       return {token: object}
    }
})

