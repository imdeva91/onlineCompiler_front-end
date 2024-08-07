import axios from "axios"; 

const Axiosinstance = axios.create({
  baseURL : 'https://onlinecompiler-backend.onrender.com',
  headers: {
 Authorization: `
 Bearer ${sessionStorage.getItem('token')}
 `,
  }, 
  // .. other options
});

export default Axiosinstance;