import { h, Component } from 'preact'
import Home from './Home/home'
import {connect} from 'unistore/preact'
import { Router, route } from 'preact-router'
import { Match } from 'preact-router/match'
import './style.scss'
import Login from './Login/login'
import Header from './Header/Navbar'
import Lists from './List/List'
import { actions } from './store/store';
import Redirect from './redirect'

class App extends Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    componentWillMount(){
    }
    handleClick(){
        console.log('click')
        this.props.increment()
    }


    render(props){
        return (
            <div>
            <h1>Hola desde Preact</h1>
            <span onClick={this.handleClick}>{this.props.count}</span>
            <br/>
            <br/>
            <Match path="/">
            { ({ matches, path, url }) => (
                <pre>{url}</pre>
            ) }
            </Match>
            <br/>
            {
                Object.keys(props.token).length > 0 ?
            (<div>
                <Header/>
                <Router>
                    <Home  default path="/"/>
                    <Lists path="/list"/>
                </Router>
            </div>
            )
           : <Login/>}
            </div>
            
        )
    }
}

export default connect('token',actions)(App)