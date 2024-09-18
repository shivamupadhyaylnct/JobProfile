import axios from "axios";
// API Methods--------
class ApiServices{
   postApiCall(url,data){
      return axios.post(url,data)
    }
}


// All API to Put Here---------
export const URLS={
    REGISTER_API:"http://tutorials.codebetter.in:7082/cbjobportal/candidate/save",
    LOGIN_API:"http://tutorials.codebetter.in:7082/cbjobportal/auth/login"
}


export default new ApiServices