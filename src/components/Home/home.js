import {h, Component } from 'preact'
import './style.scss'
import { connect } from 'unistore/preact';
import { actions } from '../store/store';
import { ViewerQuery } from '../request/querys'
import Favourites from './list-media-elements'

    
class Home extends Component{
    constructor(){
        super()
        let state= {}
        this.handleData = this.handleData.bind(this)
        this.handleResponse
    }
    handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    }
    handleData(data) {
        this.setState(data.data.Viewer)
        this.props.setId(this.state.id)
        
    }
    componentWillMount(){
        let options = {
            method: 'POST',
            headers: {
                'Authorization':`Bearer ${this.props.token.access_token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: ViewerQuery
            })
        }
        fetch('https://graphql.anilist.co',options)
            .then(this.handleResponse)
            .then(this.handleData)
            .catch((err)=>console.log(err))
    }
    render(props,state){
        return(
        <div class="main">
        <h1>Home</h1>
        {Object.keys(props.token).length >0 ?
            (
                <div>
                    <p>Bienvenido {state.name}</p>
                    <p>Tiempo desperdiciado {state.stats && state.stats.watchedTime }</p>
                        <Favourites title="Anime" favourites={state.favourites && state.favourites.anime && state.favourites.anime.nodes}/>
                        <br/>
                        <Favourites title="Manga" favourites={state.favourites && state.favourites.manga && state.favourites.manga.nodes}/>

                </div>
            ):
            <p>There is no auth token</p>
        }
        <div onClick={props.increment}>Increment</div>
        </div>
        )
    }
}

export default connect('token', actions)(Home)