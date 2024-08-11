import axios from "axios"; 

 const Axiosinstance = axios.create({
  baseURL : 'https://onlinecompilerbackend-production-698e.up.railway.app/',
 
  // .. other options
});
Axiosinstance.interceptors.request.use(async config => {
 

  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}` // you may need "Bearer" here
  return config
})

// export const UsersAxiosinstance = axios.create({
//   baseURL : 'https://node-test-production-6309.up.railway.app',
 
//   // .. other options
// });
// UsersAxiosinstance.interceptors.request.use(async config => {
 

//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}` // you may need "Bearer" here
//   return config
// })



export default Axiosinstance;