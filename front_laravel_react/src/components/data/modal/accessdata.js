import React,{useState} from "react";

const datapost=(e,start_h,start_m,end_h,end_m)=>{
  let timeString='';
  e.preventDefault();
  console.log('datapost=>',e,'\nstr=>',start_h);
    // let hostName = "";
    //   if (process.env.NODE_ENV === "development") {
    //     hostName = "http://localhost:8000/";
    //   } else if (process.env.NODE_ENV === "production") {
    //     hostName = "http://localhost:8000/";
    //   }

    // let tok=localStorage.getItem('User_Token')
    // axios.defaults.withCredentials = true;
    // axios.defaults.headers.post['Content-Type'] ='application/json';
    // axios.defaults.headers.post['Accept'] ='application/json';
    // axios.defaults.headers.post['Authorization'] =`Bearer ${tok}`;

    // return axios.post(hostName + "api/user/saveDay",{
    //     name: userNameInput,
    //     email: userEmail,
    //     password: userPassword,
    //     })
    //     .then(
    //     (response) => {
    //             // ==========
    //             //  send modal data
    //             // ==========
    //             setCalendararray(response.data.calendar);
    //             setMonth(response.data.month);
    //             setDayweek(response.data.dayofweek);
    //             // console.log("calendar",calendararray);  
    //             console.log("b",response);
    //     },
    //     (error) => {
    //       console.warn(error);
    //     }
    //     );
}

export default datapost;