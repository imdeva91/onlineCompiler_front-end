import axios from "axios"; 

const Axiosinstance = axios.create({
  baseURL : 'https://onlinecompiler-backend.onrender.com',
 
  // .. other options
});
Axiosinstance.interceptors.request.use(async config => {
 

  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}` // you may need "Bearer" here
  return config
})

export default Axiosinstance;