import axios from "axios";

 const UsersAxiosinstance = axios.create(
    {
        baseURL : 'https://node-test-production-6309.up.railway.app',
        headers: {
      //  Authorization: `<Your Auth Token>`,
          "Content-Type" : "application/json",
          'Access-Control-Allow-Origin' : "*",
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',

          timeout : 1000,
        }, 
        // .. other options
      }
 )

  export default UsersAxiosinstance