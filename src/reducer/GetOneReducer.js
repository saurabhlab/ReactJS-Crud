


export default function GetOneCustomer(state=null, action){
   //console.log("one",action.getone);
   //console.log("action d",action.D);


 //console.log("action ddd",action.payload);

    switch(action.type){
        
        case "GETPOST1":
          
           return {onedetail:action.payload.data};
        
            default : return state;
    }
}