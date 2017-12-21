import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {GetPost} from '../actions/index';
import { NavLink } from 'react-router-dom';


class CustomerDetail2 extends Component {

//on click of edit button open edit page
    Edit(ID) {
        this.props.history.push(`/Edit/${ID}`);
    }


    render() {
        //console.log(this.props.cust)

        if (!this.props.cust) {
            return (
                <div><h3>Select a Customer to open details page </h3></div>
            )
        }
     
        return (
            <div style={{paddingTop:50}}> 
            <div style={{ 'border': '2px solid gray', 'padding': '0px' }}  className="col-lg-offset-4 col-lg-6 col-md-offset-4 col-md-6 animation3">
                <NavLink to="/" className='btn btn-info pull-left'>Back </NavLink>
                <h1 style={{ "color": "green" }}>CustomerDetail </h1>
                <div className="row">
                    <div className="col-lg-12"> <h3 className="col-lg-4 col-md-4"> ID :</h3>   <h3 className="col-lg-8 col-md-8">{this.props.cust.onedetail.ID}</h3></div>
                
                    <div className="col-lg-12"> <h3 className="col-lg-4 col-md-4" > Name : </h3> <h3 className="col-lg-8 col-md-8">{this.props.cust.onedetail.Name}</h3></div>

                    <div className="col-lg-12" ><h3 className="col-lg-4 col-md-4"> Age :</h3> <h3 className="col-lg-8 col-md-8" >{this.props.cust.onedetail.Age} </h3></div>

                    <div className="col-lg-12"><h3 className="col-lg-4 col-md-4" > State :</h3> <h3 className="col-lg-8 col-md-8 ">{this.props.cust.onedetail.State} </h3></div>

                    <div className="col-lg-12"><h3 className="col-lg-4 col-md-4" > City :</h3><h3 className="col-lg-8 col-md-8" >{this.props.cust.onedetail.City} </h3></div>
                </div>
                <div>
                    <NavLink replace to={{ pathname: '/CreateMyForm' }} className="btn btn-success"> Create</NavLink>&nbsp;&nbsp;&nbsp;
                     <a className="btn btn-primary" onClick={() => this.Edit(this.props.cust.onedetail.ID)}>EDIT</a>
                </div>
                 </div>
            </div>
        )

    }
}


function mapStateToProps(state) {

    // console.log("active",state.getonecustomer);
    console.log("123", state.getonecustomer);
    return {
        cust: state.getonecustomer

    };
}

export default connect(mapStateToProps)(CustomerDetail2);