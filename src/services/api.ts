import {api} from "./client.ts"


export const loginApi=async(payload:UserLoginPayload)=> api.post("users/login", payload)
//post kar rahe kyonki login
//http://all-server.shashwatsagar.in/users/login
// {
//   "email": "admin@example.com",
//   "password": "Admin@1234"
// }