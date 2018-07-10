import{h,render} from 'preact';
import{Provider} from 'unistore/preact'
import Main from './components/appcomponent'
import {store} from './components/store/store'


let root = document.getElementById("app");
console.log(store)
const App = () =>(
    <Provider store={store}>
        <Main/>
    </Provider>
)
store.subscribe(state => console.log(state))
render(<App/>, root );
