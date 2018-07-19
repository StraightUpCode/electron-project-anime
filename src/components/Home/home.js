import {h, Component } from 'preact'
import './style.scss'
import {route} from 'preact-router'
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
        this.dataTransform
    }
    handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    }
    dataTransform(id,name,stats,anime,manga){
        return {
        id: id,
        name: name,
        stats: stats.watchedTime,
        Anime: anime.map((obj)=>({title: obj.title.romaji,
                                  coverImg: obj.coverImage.medium})),
        Manga: manga.map((obj)=>({title: obj.title.romaji,
                                  coverImg: obj.coverImage.medium}))
        }
    }
    handleData(data) {
        
        this.setState(this.dataTransform( data.data.Viewer.id,
                                          data.data.Viewer.name,
                                          data.data.Viewer.stats,
                                          data.data.Viewer.favourites.anime.nodes,
                                          data.data.Viewer.favourites.manga.nodes ))
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

    render(state){
        return(
        <div class="main">
        <h1>Home</h1>
        <div>
            <p>Bienvenido {state.name}</p>
            <p>Tiempo desperdiciado {`${((state.stats/60)/24).toPrecision(3) || ''} dias` }</p>
                <Favourites title="Anime" favourites={state.Anime}/>
                <br/>
                <Favourites title="Manga" favourites={state.Manga}/>

        </div>
        </div>
        )
    }
}

export default connect('token', actions)(Home)