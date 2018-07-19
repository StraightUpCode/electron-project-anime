import createStore from "unistore";

const initialState = {
    token:{}    
}
const getInitialState = () => {
    let expDate = localStorage.getItem("exp_date")
    if(expDate){
        if(new Date(parseInt(expDate)) > new Date()){
            return ({
                id:'',
                token: {
                    access_token: localStorage.getItem("access_token"),
                    exp_date : expDate
                },
            })
        }
    }
    return ({id:'',token:{},data:{}})
}
export let store = createStore(getInitialState())

export let actions = store =>({
    increment: (state)=> ({count: state.count+1}) ,
    setToken: (state,object) => {
        localStorage.setItem("access_token",object.access_token)
        localStorage.setItem("exp_date", object.exp_date)
       return {token: object}
    },
    setId: (state, newId)=>({id: newId}),
})

