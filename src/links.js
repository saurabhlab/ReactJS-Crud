import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// import './content/css/bootstrap.css';
// import './content/css/theme.css';
// import './content/font-awesome/css/font-awesome.css';

//use for logout
import AuthService from './utils/AuthService'
//import { PropTypes  } from 'react'

const auth = new AuthService('pFG42lJpsqHf1xLIBbLKBFp92yaMumpI', 'saurabhwanjari.auth0.com');

class Links extends Component {


constructor(props,context){
  super(props,context);
  const name=auth.getProfile();
  this.state={profile:name}
}

  // static propsTypes = {
  //     history: React.PropTypes.object.isRequired
  // }
// logout button code
  logout() {
    auth.logout()
    this.props.nextState.history.push('/login');
  }
  render() {
    return (
      <div >

        <nav className="navbar navbar-default navbar-inverse top-links" role="navigation" style={{ "marginBottom": "0px" }}>


          <div>
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html"> React Application</a>
            </div>

          </div>


          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-messages">
                <li>
                  <a href="#">
                    <div>
                      <strong>Saurabh</strong>
                      <span className="pull-right text-muted">
                        <em>Yesterday</em>
                      </span>
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <strong>Sitanshu</strong>
                      <span className="pull-right text-muted">
                        <em>Yesterday</em>
                      </span>
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <strong>Shivam</strong>
                      <span className="pull-right text-muted">
                        <em>Yesterday</em>
                      </span>
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a className="text-center" href="#">
                    <strong>Ayush</strong>
                    <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>

            </li>

            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-tasks">
                <li>
                  <a href="#">
                    <div>
                      <p>
                        <strong>Task 1</strong>
                        <span className="pull-right text-muted">40% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ "width": "40%" }}>
                          <span className="sr-only">40% Complete (success)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <p>
                        <strong>Task 2</strong>
                        <span className="pull-right text-muted">20% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ "width": "20%" }}>
                          <span className="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <p>
                        <strong>Task 3</strong>
                        <span className="pull-right text-muted">60% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ "width": "60%" }}>
                          <span className="sr-only">60% Complete (warning)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="http://www.google.com">
                    <div>
                      <p>
                        <strong>Task 4</strong>
                        <span className="pull-right text-muted">80% Complete</span>
                      </p>
                      <div className="progress progress-striped active">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ "width": "80%" }}>
                          <span className="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a className="text-center" href="#">
                    <strong>See All Tasks</strong>
                    <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>

            </li>

            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-alerts">
                <li>
                  <a href="#">
                    <div>
                      <i className="fa fa-comment fa-fw"></i> New Comment
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span className="pull-right text-muted small">12 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <i className="fa fa-envelope fa-fw"></i> Message Sent
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <i className="fa fa-tasks fa-fw"></i> New Task
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="#">
                    <div>
                      <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span className="pull-right text-muted small">4 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a className="text-center" href="#">
                    <strong>See All Alerts</strong>
                    <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>

            </li>

            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">{this.state.profile.name}
                <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a onClick={this.logout.bind(this)} ><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                </li>
              </ul>

            </li>
          </ul>

          <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
              <ul className="nav" id="side-menu">
                <li className="sidebar-search">
                  <div className="input-group custom-search-form">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>

                </li>
                <li>
                  <a><i className="glyphicon glyphicon-user"></i> <NavLink replace to="/" className="">List of Customer </NavLink></a>
                </li>


                <li>
                  <a><i className="fa fa-edit fa-fw"></i><NavLink replace to="/CreateMyForm" className="">Add Customer </NavLink></a>
                </li>

                {/*<li>
                <a><i className="fa fa-edit fa-fw"></i><NavLink replace to="/login" className="">Login</NavLink></a>
              </li>*/}


                <li>
                  <a href="#"><i className="glyphicon glyphicon-info" ></i> Other Info
                             <span className="fa fa-caret-down pull-right "></span></a>
                  <ul className="nav nav-second-level">



                    <li>
                      <a><i className="glyphicon glyphicon-home"></i>    <NavLink to={{ pathname: '/Home' }} className=" "> Home </NavLink></a>
                    </li>

                    <li>
                      <a><i className="glyphicon glyphicon-text-background"></i> <NavLink to={{ pathname: '/about' }} className="" > About</NavLink></a>
                    </li>

                    <li>
                      <a><i className="glyphicon glyphicon-phone-alt"></i> <NavLink to={{ pathname: '/contact' }} className="" > Contact</NavLink></a>
                    </li>

                  </ul>
                </li>







                <li>
                  <a href="#"><i className="glyphicon glyphicon-list" ></i> List 1
                             <span className="fa fa-caret-down pull-right"></span></a>
                  <ul className="nav nav-second-level">
                    <li>
                      <a href="#">List Item 1</a>
                    </li>
                    <li>
                      <a href="#">List Item 2</a>
                    </li>
                    <li>
                      <a href="#">List Item 3</a>
                    </li>
                    <li>
                      <a href="#">List Item 4</a>
                    </li>
                  </ul>
                </li>




                <li>
                  <a href="#"><i className="glyphicon glyphicon-list" ></i> List 2
                             <span className="fa fa-caret-down pull-right"></span></a>
                  <ul className="nav nav-second-level">
                    <li>
                      <a href="#">List Item 1</a>
                    </li>
                    <li>
                      <a href="#">List Item 2</a>
                    </li>
                    <li>
                      <a href="#">List Item 3</a>
                    </li>
                    <li>
                      <a href="#">List Item 4</a>
                    </li>
                  </ul>
                </li>


              </ul>
            </div>

          </div>

        </nav>




      </div>
    )
  }
}
export default Links;
//-----------------------------



  // <nav >
  //   <div className="pull-right">
  //     <NavLink to={{ pathname: '/Home' }} className="img-circle" style={{ "backgroundColor": "pink" }}> Home </NavLink>&nbsp;
  //     <NavLink to={{ pathname: '/about' }} className="img-circle" style={{ 'backgroundColor': "yellow" }}> About</NavLink>&nbsp;

  //     <NavLink to={{ pathname: '/contact' }} className="img-circle" style={{ "backgroundColor": "orange" }}> Contact</NavLink>

  //   </div>



  //   <div className="pull-left">
  //     <NavLink replace to={{ pathname: '/GetCustomer' }} className="btn btn-info "> All Customer</NavLink>&nbsp;
  //     <NavLink replace to={{ pathname: '/CreateMyForm' }} className="btn btn-success">Create</NavLink>





  //   </div>

  // </nav>
