
import React from 'react'
import ReactDOM from 'react-dom'
import { Form, FormGroup, FormControl,  Button, ButtonToolbar } from 'react-bootstrap'


import user3 from '../Image/user3.jpg';
// import AuthService from '../utils/AuthService'
//import styles from './styles.module.css'
export class Login extends React.Component {
    
    // static contextTypes = {
    //     router: T.object
    // }
    // static propTypes = {
    //     location: T.object,
    //     auth: T.instanceOf(AuthService)
    // }

    getAuthParams() {
           return {
            email: ReactDOM.findDOMNode(this.refs.email).value,
            password: ReactDOM.findDOMNode(this.refs.password).value
        }
    }

    login(e) {
        e.preventDefault()
        const { email, password } = this.getAuthParams()
        this.props.auth.login(email, password)
    }

    signup() {
        const { email, password } = this.getAuthParams()
        this.props.auth.signup(email, password)
    }

    loginWithGoogle() {
        this.props.auth.loginWithGoogle();
    }

    render() {
           return (

            <div className="" style={{paddingTop:120}}>
                <div className=" col-lg-offset-3 col-lg-5  col-md-offset-3 col-md-9 col-sm-offset-3 col-sm-9  col-xs-12 ">
                    <div className="panel panel-primary">
                        <div className="panel-heading " style={{height:80}}><h4>User Login</h4></div>

                        <div className="panel-body row" >
                            <Form className=" form-horizontal" onSubmit={this.login.bind(this)} >
                             <img src={user3}  alt="kk" height="200px" width="200px" style={{paddingBottom:10}}/>
                                <FormGroup controlId="email">
                                    <label className="col-md-4 col-sm-4  col-lg-4 control-label"> Email</label>
                                    <div className="col-md-4 col-sm-4 col-lg-7">
                                        <FormControl type="email" ref="email" placeholder="yours@example.com" required />
                                    </div>
                                </FormGroup>

                                <FormGroup controlId="password">
                                    <label className="col-md-4 col-sm-4  col-lg-4 control-label"> Password</label>
                                    <div className="col-md-4 col-sm-4 col-lg-7">
                                        <FormControl type="password" ref="password" placeholder="Password" required />
                                    </div>
                                </FormGroup>

                                <div className="col-md-4 col-sm-4 col-lg-offset-2 col-lg-10">
                                    <ButtonToolbar >
                                        <Button type="submit" bsStyle="primary">Log In</Button>
                                        <Button  bsStyle="success" onClick={this.signup.bind(this)}>Sign Up</Button>
                                        <Button bsStyle="default" onClick={this.loginWithGoogle.bind(this)}>
                                            Login with Google
                                        </Button>
                                    </ButtonToolbar>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
       )
    }
}

export default Login;
