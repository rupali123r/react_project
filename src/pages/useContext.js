import React from 'react';
const userContext = React.createContext();

const myData = {
    access_token: localStorage.getItem("access_token"),
    api_status: "test"
}
// console.log("mydata",myData.access_token)
export { userContext, myData };