import {api} from "./client.ts"


export const loginApi=async(payload:UserLoginPayload)=> api.post("users/login", payload)

export const registerApi=async(payload:UserRegisterPayload)=> api.post("users/register", payload)



//post kar rahe kyonki login
//http://all-server.shashwatsagar.in/users/login
// {
//   "email": "admin@example.com",
//   "password": "Admin@1234"
// }



// http://all-server.shashwatsagar.in/api/v1/users/register

//  API_URL = BASE_URL + ENDPOINT (controller/method)