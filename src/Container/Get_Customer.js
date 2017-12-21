import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GetMethod from '../actions/index';
//import rootReducer from '../reducer';
//import {selectCustomer}  from '../actions/index';
import { getcount, currentpage } from '../actions/index';
import { GetPost1 } from '../actions/index';
import { Deleted } from '../actions/index';
import Notifications, { notify } from 'react-notify-toast';
import { NavLink } from 'react-router-dom';
import loading from '../Image/loading.gif';
import AuthService from '../utils/AuthService'
//import { PropTypes as T } from 'react'
import { Button } from 'react-bootstrap'
import  { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

const auth = new AuthService('pFG42lJpsqHf1xLIBbLKBFp92yaMumpI', 'saurabhwanjari.auth0.com');

class GetIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            todosPerPage: 5
        };
        this.handleClick = this.handleClick.bind(this);
    }


    //code for logout button
    log() {
        // destroys the session data
        auth.logout()
        // redirects to login page
        this.props.nextState.history.push('/login');
    }


    componentWillMount() {
        //pagination code
        this.props.getcount().then(() => {
            //--current page code
            if (this.props.page == null)
                this.props.currentpage(this.state.currentPage);
            else
                this.props.currentpage(this.props.page);

            this.props.GetMethod(this.props.page).then(() => {
                notify.show(" All Records getting succesfully.... !", "success", 1000);
            });
        });
    }

    //pagination buttin code
    handleClick(event) {
        this.setState({ currentPage: event.target.id })
        this.props.currentpage(Number(event.target.id));
        this.props.GetMethod(event.target.id)
        //this.props.selectCustomer();

    }

    // static propsTypes = {
    //     history: React.PropTypes.object.isRequired
    // }

    Edit(ID) {
        this.props.nextState.history.push(`/Edit/${ID}`);
    }


Delete(ID){

   confirmAlert({
      title: '',                       
      message: 'Are you sure to delete this.',                
      confirmLabel: 'OK',                           
      cancelLabel: 'Cancel',                            
      onConfirm: () =>
      this.props.Deleted(ID).then((request) => { this.props.GetMethod(this.props.page);})
//       this.props.Deleted(ID).then((request)=>{
        
//         this.props.getcount().then(()=>{
//        this.props.GetIndex(this.props.page);
//    });
//     })



     ,    
      onCancel: () => "",      
    })
}

    renderCustomer() {

        const todosPerPage = this.state.todosPerPage;
        const pageNumbers = [];
        const lastpage = Math.ceil(this.props.count / todosPerPage);
        for (let i = 1; i <= lastpage; i++) {
            pageNumbers.push(i);
        }
        //console.log("pagenumber", pageNumbers);
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="" key={number}
                    id={number}
                    onClick={this.handleClick}>
                    <a id={number} className={(number === Number(this.props.page) ? "active" : "default")} > {number} </a>
                </li>
            );
        });

        if (!this.props.bb) {
            return (
                <div><h3>Loading..</h3>
                    <img src={loading} alt="load" height="300px" width="300px" />
                </div>
            );
        }
        return (
            <div className="container" style={{paddingTop:50}}>
                <Notifications />
                <div className=" col-lg-offset-3 col-lg-9  col-md-offset-3 col-md-9  col-sm-offset-3 col-sm-9 col-xs-offset-3 col-xs-9 ">
                {/*    <NavLink replace to={{ pathname: '/CreateMyForm' }} className="btn btn-lg btn-success"> Create</NavLink>*/}
                    <Button style={{marginBottom:10}} className=" btn  btn-danger pull-right" onClick={this.log.bind(this)}>Logout</Button>

                    <table className="table table-border table-condensed animation1" style={{ "border": "2px solid gray", "margin": "10px", "padding": "50px" }}>
                        <thead>
                            <tr >
                                <th> ID </th>
                                <th> Name </th>
                                <th> Age </th>
                                <th> State </th>
                                <th> City </th>
                                <th> Option </th>
                            </tr>
                        </thead>


                        <tbody>
                            {this.props.bb.map((item, key) => {
                                return (<tr key={key}>
                                    <td> {item.ID}</td>
                                    <td> {item.Name}</td>
                                    <td> {item.Age}</td>
                                    <td> {item.State}</td>
                                    <td> {item.City}</td>
                                    <td> 
                                    {/*<button className="btn btn-danger" onClick={
                                                                                                             
                                        ()=> this.props.Deleted(item.ID).then((request) => { this.props.GetMethod(this.props.page);})
                                    }>   DELETE   </button>&nbsp;*/}
                              <button className="btn btn-danger" onClick={()=>this.Delete(item.ID)  }>   DELETE   </button>&nbsp;
                             <a className="btn btn-primary" onClick={() => this.Edit(item.ID)}>EDIT</a>&nbsp;

                       <NavLink to={{ pathname: '/CustomerDetail2' }} className="btn btn-success" onClick={() => this.props.GetPost1(item.ID)}>Detail</NavLink>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>

                {/*pagination code*/}
                <ul id="page-numbers" className="pagination  ">
                    <li className="" onClick={() => {
                        this.setState({ currentPage: this.props.page });
                        this.props.currentpage((this.props.page - 1))
                        this.props.GetMethod(this.props.page - 1);
                    }
                    } >
                        <a className={(this.props.page <= 1) ? "btn disabled glyphicon  glyphicon-fast-backward" : " btn glyphicon glyphicon-fast-backward"}>
                        </a>
                    </li>

                    {renderPageNumbers}

                    <li className="" onClick={() => {
                        this.setState({ currentPage: this.props.page });
                        this.props.currentpage((this.props.page + 1))
                        this.props.GetMethod(this.props.page + 1);
                    } } >

                        <a className={(this.props.page >= lastpage) ? " btn disabled glyphicon glyphicon-fast-forward" : "btn glyphicon  glyphicon-fast-forward"}>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderCustomer()}
            </div>
        );
    }
}



function mapStateToProps(state) {
    // console.log("container state", state);
    return {
        bb: state.getdata.all,
        count: state.getdata.count,
        page: state.getdata.page
    };
}


function mapdispatchtoprops(dispatch) {

    return bindActionCreators({ GetMethod: GetMethod, Deleted: Deleted, GetPost1: GetPost1, getcount: getcount, currentpage: currentpage }, dispatch);
}

export default connect(mapStateToProps, mapdispatchtoprops)(GetIndex);
