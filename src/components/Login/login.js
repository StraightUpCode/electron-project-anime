import {h, Component} from 'preact'
import { connect } from 'unistore/preact';
import {actions} from '../store/store'
import {route} from 'preact-router'

class Login extends Component{

    handleSecond(e){
        console.log("redirect")
        let token = e.newURL.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]
        let expDate = e.newURL.match(/\&(?:expires_in)\=(.*)/)[1]
        let date = new Date();
        let expire = new Date(date.getTime()+parseInt(expDate)).getTime()
        this.props.setToken({access_token : token, exp_date: expire})
        route("/")
    }
    render(props){
        return (
            <div>
            <h1>HOLA LOGIN</h1>
                <webview 
                 onDid-get-redirect-request={this.handleSecond.bind(this)}
                 src="https://anilist.co/api/v2/oauth/authorize?client_id=717&response_type=token"></webview>
            </div> 
        )
    }

}
export default connect('token',actions)(Login)