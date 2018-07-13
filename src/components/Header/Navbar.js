import { h } from 'preact'
import { Link } from '../../../node_modules/preact-router/match';

export default () => (
    <navbar>
        <Link activeClassName="active" href="/">Home</Link>
        <Link activeClassName="active" href="/list">List</Link>
        <Link activeClassName="active" href="/">Home</Link>
        <Link activeClassName="active" href="/">Home</Link>
    </navbar>
    
)