import { h } from 'preact'
import './media-list.scss'
export default (props)=>{
    let media = props.favourites ||[]
    let listItems = media.map((data) => (
    <li class="list-element">
        <img class="media-img"src={data.coverImage.large || data.coverImage.medium}/>
        <div class="media-title"><span>{data.title.romaji}</span></div>
    </li>)
     )
    return (
        <ul>
           {listItems}
        </ul>
    )
}