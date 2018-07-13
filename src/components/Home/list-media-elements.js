import { h } from 'preact'
import './media-list.scss'
export default (props)=>{
    let media = props.favourites ||[]
    let listItems = media.map((data) => (
    <li class="list-element">
        <img class={data.coverImage.large ?"media-img" : "media-img medium"} src={data.coverImage.large || data.coverImage.medium}/>
        <div class="media-title"><span>{data.title.romaji}</span></div>
    </li>)
     )
    return media.length ? (
        <div>
            <h1>{props.title}</h1>
            <ul class="list-container">
            {listItems}
            </ul>
        </div>
    ) :  null
}