import { h, Component } from 'preact'
import MyComponent from './Component2/component2'
import Home from './Home/home'
import {connect} from 'unistore/preact'
import { Router, route } from 'preact-router'
import { Match , Link} from 'preact-router/match'
import './style.scss'
import Login from './Login/login'
import { actions } from './store/store';
/*
const tokenRequest = () => {
    requestToken()
    console.log(localStorage.getItem('token'))

}

const Main = connect(['count'])(({count})=> (
    (
        <div>
        <Link activeClassName="active" href="/component">Mi Componente</Link>
        <br/>
        <Link activeClassName="active" href="/">Home</Link>
      
       <a href="https://anilist.co/api/v2/oauth/authorize?client_id=717&response_type=token">Login ?</a>
       
        <div onClick={tokenRequest}>Sign in with Anilist</div> 
        <span >{count}</span>

        <Router>
            <Home default path="/"/>
            <MyComponent path="/component" />
        </Router>
        </div>
    )

))*/
class App extends Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    componentWillMount(){
        console.log(this.props)
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
            <Link href="/home">home</Link>
            <br/>
            <Match path="/">
            { ({ matches, path, url }) => (
                <pre>{url}</pre>
            ) }
            </Match>
            <br/>
            {Object.keys(props.token).length > 0 ?
            <Router>
                <Home default path="/home"/>
                <Login path="/login"/>
            </Router>
           : <Login/>}
            </div>
            
        )
    }
}

export default connect('token',actions)(App)