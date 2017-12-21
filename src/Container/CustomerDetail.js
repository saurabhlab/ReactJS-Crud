
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// //import {selectCustomer} from '../actions/index';


// class CustomerDetail extends Component {

//     componentWillMount() {
//         //alert(this.props.match.params.ID);

//         //   this.props.selectCustomer(this.props.cust.ID)
//         this.props.selectCustomer();

//     }


//     render() {

//         if (!this.props.cust) {
//             //console.log("cust",this.props.cust );
//             return (
//                 <div><h3>Select a book to get started.</h3></div>
//             )
//         }
//         return (


//             <div style={{ 'border': '2px solid gray', 'margin': '80px' }}>
//                 <div><h3>Select a {this.props.cust.ID} </h3></div>
//                 <div> <h2>CustomerDetail </h2>

//                     <div><h3> Customer ID :</h3><h4 className="clsbookdetail" >{this.props.cust.ID} </h4></div>
//                     <div> <h3> Customer Name :</h3><h4 className="clsbookdetail">{this.props.cust.Name}</h4></div>
//                     <div><h3> Email :</h3><h4 className="clsbookdetail" >{this.props.cust.Email} </h4></div>

//                     <div><h3> Age :</h3><h4 className="clsbookdetail" >{this.props.cust.Age} </h4></div>



//                     <div><h3> College :</h3><h4 className="clsbookdetail" >{this.props.cust.College} </h4></div>

//                     {/*
//             <div> Name <input type="text" value={this.props.cust.Name}/></div><br/>
//             <div> Age <input type="text" value={this.props.cust.Age}/></div><br/>
//             <div> Email <input type="text" value={this.props.cust.Email}/></div><br/>
//             <div> College <input type="text" value={this.props.cust.College}/></div> <br/>
// */}

//                 </div>







//             </div>
//         )

//     }
// }


// function mapStateToProps(state) {

//     // console.log("active",state.activeCustomer);

//     return {
//         cust: state.activeCustomer

//     };
// }

// export default connect(mapStateToProps)(CustomerDetail);



















// // import React, { Component } from 'react';
// // import {connect} from 'react-redux';


// //  class CustomerDetail extends Component{
// //     render(){

// //     if (!this.props.cust) {
// //         //console.log("cust",this.props.cust );
// //       return (
// //         <div><h3>Select a book to get started. </h3></div>
// //       )
// //     }
// //    return(  


// //             <div style={{'border':'2px solid gray','margin':'80px'}}>
// //              <div><h3>Select a {this.props.cust.ID} </h3></div>
// //             <div> <h2>CustomerDetail </h2>

// //             <div><h3> Customer ID :</h3><h4 className="clsbookdetail" >{this.props.cust.ID} </h4></div>
// //             <div> <h3> Customer Name :</h3><h4 className="clsbookdetail">{this.props.cust.Name}</h4></div>
// //              <div><h3> Email :</h3><h4 className="clsbookdetail" >{this.props.cust.Email} </h4></div>

// //              <div><h3> Age :</h3><h4 className="clsbookdetail" >{this.props.cust.Age} </h4></div>

// //              <div><h3> Address :</h3><h4 className="clsbookdetail" >{this.props.cust.Address} </h4></div>

// //              <div><h3> College :</h3><h4 className="clsbookdetail" >{this.props.cust.College} </h4></div>

// // {/*
// //             <div> Name <input type="text" value={this.props.cust.Name}/></div><br/>
// //             <div> Age <input type="text" value={this.props.cust.Age}/></div><br/>
// //             <div> Email <input type="text" value={this.props.cust.Email}/></div><br/>
// //             <div> College <input type="text" value={this.props.cust.College}/></div> <br/>
// // */}

// //             </div>







// //              </div>
// //  )

// //     }
// // }


// // function mapStateToProps(state){

// //        // console.log("active",state.activeCustomer);

// //     return {
// //         cust:state.activeCustomer

// //     };
// //  }

// // export default connect(mapStateToProps)(CustomerDetail);



