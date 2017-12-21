// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import GetMethod from '../actions/index';
// //import rootReducer from '../reducer';
// //import {selectCustomer}  from '../actions/index';

// import { GetPost1 } from '../actions/index';


// import { Deleted } from '../actions/index';
// //import {$} from 'jquery';


// import Notifications, { notify } from 'react-notify-toast';

// import { NavLink } from 'react-router-dom';
// //import loading from '../Image/loading.gif';




// class GetIndex extends Component {
//     componentWillMount() {

//         this.props.GetMethod().then(() => {

//             // let myColor = { background: 'green', text: "white" };
//             notify.show(" All Records getting succesfully.... !", "success", 1000);



//         });
//         //this.props.selectCustomer();

//     }


//     componentDidMount() {
//         var self = this;
//         $('#mytable').dataTable({
//             "sPaginationType": "bootstrap",
//             "bAutoWidth": false,
//             "bDestroy": true,
//             "fnDrawCallback": function () {
//                 self.forceUpdate();
//             },
//         });
//     }



//     componentDidUpdate() {
//         $('#mytable').dataTable({
//             "sPaginationType": "bootstrap",
//             "bAutoWidth": false,
//             "bDestroy": true,
//         });
//     }



//     static propsTypes = {
//         history: React.PropTypes.object.isRequired
//     }


//     Edit(ID) {
//         this.props.history.push(`/Edit/${ID}`);
//     }






//     renderCustomer() {

//         if (!this.props.bb) {
//             return (
//                 <div><h3>Loading..</h3>
//                     {/* <img src={loading} alt="load" height="300px" width="300px"/>
//             */}</div>
//             );
//         }

//         return (
//             <div >
//                 <Notifications />
//                 <div className=" col-lg-offset-3 col-lg-9  col-md-offset-3 col-md-9  col-sm-offset-3 col-sm-9 col-xs-offset-3 col-xs-9 ">
//                     <NavLink replace to={{ pathname: '/CreateMyForm' }} className="btn btn-success"> Create</NavLink>

//                     <table className="table table-border table-condensed animation1" id="mytable" style={{ "border": "2px solid gray", "margin": "10px", "padding": "50px" }}>

//                         <thead>
//                             <tr >

//                                 <th> ID </th>
//                                 <th> Name </th>
//                                 <th> Age </th>
//                                 <th> State </th>
//                                 <th> City </th>

//                                 <th> Option </th>

//                             </tr>
//                         </thead>


//                         <tbody>
//                             {this.props.bb.map((item, key) => {
//                                 return (<tr key={key}>
//                                     <td> {item.ID}</td>
//                                     <td> {item.Name}</td>
//                                     <td> {item.Age}</td>
//                                     <td> {item.State}</td>
//                                     <td> {item.City}</td>

//                                     <td> <button className="btn btn-danger" onClick={() => this.props.Deleted(item.ID).then((request) => { this.props.GetMethod(); })}>DELETE </button>&nbsp;
//                                     {/*  <NavLink to={{ pathname: "/CustomerDetail/"+item.ID}} className="btn btn-success" onClick={()=> this.props.selectCustomer(item)}> Detail</NavLink>&nbsp;
//                           <NavLink to={{ pathname: "/Edit/"+item.ID}} className="btn btn-success"> Edit</NavLink>*/}
//                                         <a className="btn btn-primary" onClick={() => this.Edit(item.ID)}>EDIT</a>&nbsp;
//                        <NavLink to={{ pathname: '/CustomerDetail2' }} className="btn btn-success" onClick={() => this.props.GetPost1(item.ID)}>Detail</NavLink>


//                                     </td>
//                                 </tr>)

//                             })}

//                         </tbody>
//                     </table>


//                 </div>

//             </div>
//         )
//     }

//     render() {
//         return (
//             <div>
//                 {this.renderCustomer()}
//             </div>
//         );
//     }
// }



// function mapStateToProps(state) {
//     //  console.log("container state",state.getdata.all);
//     return {
//         bb: state.getdata.all
//     };
// }


// function mapdispatchtoprops(dispatch) {

//     return bindActionCreators({ GetMethod: GetMethod, Deleted: Deleted, GetPost1: GetPost1 }, dispatch);
// }




// export default connect(mapStateToProps, mapdispatchtoprops)(GetIndex);












