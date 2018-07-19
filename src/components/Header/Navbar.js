import { h } from 'preact'
import { Link } from '../../../node_modules/preact-router/match';

export default () => (
    <navbar>
        <ul>
            <li><Link activeClassName="active" href="/">Home</Link></li>
            <li><Link activeClassName="active" href="/list">List</Link></li>
        </ul>
    </navbar>
    
)