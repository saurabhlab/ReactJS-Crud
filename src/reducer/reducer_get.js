import {GET_DATA} from '../actions/index';
//import GetMethod from '../actions/index';


const INITIAL_STATE={all:[],onedetail:null, getone:null,count:null};

export default function GetCustomer(state=INITIAL_STATE, action){

// if(!action.payload){
//         console.log("reducer1",action.payload);

// }

 //console.log("reducer1".green);
  //  console.log("reducer2",action.payload.data);
switch(action.type){
  


case GET_DATA:
return {...state,all:action.payload.data};

case "GETCOUNT":          
return {...state,count:action.payload.data};

 


//currentpage code

case  "currentpage":
return{...state, page:action.payload};


 case "GETPOST":
 //console.log("reducerget",action.payload.data);
 return {...state, getone:action.payload.data};

default: return state;
}
}







// import {GET_DATA, GET_ONE_DATA} from '../actions/index';
// //import GetMethod from '../actions/index';


// const INITIAL_STATE={all:[], getone:null,count:null};

// export default function GetCustomer(state=INITIAL_STATE, action){

// // if(!action.payload){
// //         console.log("reducer1",action.payload);

// // }

//  //console.log("reducer1".green);
//   //  console.log("reducer2",action.payload.data);
// switch(action.type){
  
// case GET_ONE_DATA:
// return {...state, getone:action.payload.data};


// case GET_DATA:
// return {...state,all:action.payload.data};

// case "GETCOUNT":          
// return {...state,count:action.payload.data};







// //---



//  case "GETPOST":
//  //console.log("reducerget",action.payload.data);
//  return {...state, getone:action.payload.data};

// default: return state;
// }
// }




