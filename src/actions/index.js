import axios from 'axios';
export  const CREATE_POST='CREATE_POST';
export  const GET_DATA='GET_DATA';
export  const GET_ONE_DATA='GET_ONE_DATA';
const ROOT_URL='http://localhost:61978/api/HomeApi'
import {notify} from 'react-notify-toast';
//const API_KEY ='?key=asdasfasd';
//console.log('http://localhost:55546/api/studentapi');

// console.log("fffc",'http://localhost:61978/api/HomeApi');


//getting all data with pagination only 5 records gets
export default function GetMethod(a){
        var pg =a;
    const request =axios.get(`${ROOT_URL}?page=${pg}`);
 //console.log("fffc"+request);

return{
    type:GET_DATA,
    payload: request
};

} 


//paging
export function getcount(){
    const request=axios.get(`${ROOT_URL}?count=a`);
    return{
        type:"GETCOUNT",
        payload:request
    }

}


//CURRNETPAGE action
export function currentpage(page)
{
    return{
        type:"currentpage",
        payload:page
    }
}





//create new post using axios 
export function createPost(props){
    const request =axios.post('http://localhost:61978/api/HomeApi',props);

    return{
        type:CREATE_POST,
        payload: request
    }
}



// export function selectCustomer(ID){
//     //alert("hii");
//     //console.log("action/index",d);
//     const request =axios.get(`${ROOT_URL}/CustomerDetail/${ID}`);

//     return{
//         type: 'GET_ONE_DATA',
//          payload:request
//     };
// }





//delete code

export function Deleted(id)
{
   
    // alert("You want to delete ",id);
    const request=axios.delete(`${ROOT_URL}/${id}`);
  //  console.log(request);


notify.show("deleted succesfully", "warning", 2000);

    return{
          type:"DELETE",
          payload:request
          }

}



//edit code

export function Update(props){
 
   // console.log(props);
const request =axios.put(`${ROOT_URL}`,props);
 // notify.show("deleted succesfully", "success", 5000);
    return{
        type:"UPDATE",
        payload:request
    }
}



export function GetPost(id){
//alert();
    const request =axios.get(`${ROOT_URL}/${id}`);
   // console.log("getone",request);
    return{
        type:"GETPOST",
        payload:request
    }
}







export function GetPost1(id){
    //alert();
    const request =axios.get(`${ROOT_URL}/${id}`);
   // console.log("getone",request);
    return{
        type:"GETPOST1",
        payload:request
    }
}


