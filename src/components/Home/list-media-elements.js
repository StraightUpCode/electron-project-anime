import { h } from 'preact'
import './media-list.scss'
export default (props)=>{
    let media = props.favourites ||[]
    let cont = 0
    let listItems = media.map((data) => {
        cont++
        let el = (<li class={cont>2 ?"list-element-left" :"list-element"}>
                    <img class="media-img medium" src={data.coverImg}/>
                    <div class={"media-title"}><span>{data.title}</span></div>
                    </li>)
        cont = cont == 4? 0: cont
        return el
    }
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