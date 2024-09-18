import { useRef } from "react"

function Register() 
{
    
    const Name = useRef()
    const Email = useRef()
    const Phone = useRef()
    const Password = useRef()
    
    const Registration=(event)=>{
        event.preventDefault()
        var obj={
             fullname:Name.current.value,
             phone:Phone.current.value,
             email:Email.current.value,
             password:Password.current.value
           }
           console.log(obj)
       }
return<>
     <form onSubmit={Registration}>
        <input type="text" ref={Name} className="form-control" id="name" placeholder="Your Name"/>
        <input type="Email" ref={Email} className="form-control" id="Email" placeholder="Your Email"/>
        <input type="text" ref={Phone} className="form-control" id="Phone" placeholder="Your Phone"/>
        <input type="text" ref={Password} className="form-control" id="Password" placeholder="Your Password"/>
     </form>
</>
}
export default Register;

//////////////////////////////////










  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (password !== e.target.value) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert("Passwords match. Form submitted!");
    } else {
      setErrorMessage("Passwords do not match. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required/>
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};


===============================

try{
  setIsApiCalling(true)
  const res= await ApiServices.postApiCall(URLS.REGISTER_API,obj)
  console.log(JSON.stringify(res))
  console.log(res.data.message)
  console.log(res.data.status)        

  if(res.data.status===true){
      setIsApiCalling(false)
      setMsg(res.data.message)
      console.log(res.data.status) 
      // setTimeout(() => { setMsg("") }, 5000);
  }else{
      setIsApiCalling(false)
      setMsg(res.data.data.message)
      console.log(res.data.status)        

  }

}catch(error){
  console.log("catch error:", error.message)     
  setMsg("Some Error Occure Try Again",error.message)
}
}
============================================================================

import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:'user',
    initialState:{
    value:{name:undefined,contact:undefined,token:undefined,isLogin:false,type:undefined}
    },
    reducers:{
        authReducer :(state,action)=>{
            state.value = action.payload
            console.log("slice",state.value)
        }

    }
})

export const {authReducer} = Slice.actions
export default Slice.reduce
===========================================================================

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

const Store = configureStore({

    reducer:{
        authData:userReducer

    }

})
export default Store

===================================================================


<nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
<Link to="/" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
    <h1 class="m-0 text-primary">JobEntry</h1>
</Link>
<button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarCollapse">
    <div class="navbar-nav ms-auto p-4 p-lg-0">
        <Link to="/" class="nav-item nav-link active">Home</Link>
        <Link to="/findbycategory" class="nav-item nav-link">Category</Link>
        <Link to="/about" class="nav-item nav-link">About</Link>
         <div class="nav-item dropdown">
                { loginData.isLogin ? <>
                  {loginData.type == "admin" ? <></>:<></>}
                  {loginData.type == "hr" ? <></>:<></>}
                  {loginData.type == "Candidate" ? <>
                    <Link to="/findjobs" class="nav-item nav-link">Find Jobs</Link>
                    <Link to="/findjobs" class="nav-item nav-link">Applied Jobs</Link>
                    <Link to="/findjobs" class="nav-item nav-link">Profile</Link>

                  </>:<></>}
                  </>:<>
                  <Link to="/about" class="nav-item nav-link">About</Link>
                  <Link to="/findjobs" class="nav-item nav-link">Jobs</Link>
                  <Link to="/contactus" class="nav-item nav-link">Contact</Link>
                  </>
                } 
        </div>
  {loginData.isLogin ? <><span class="btn btn-primary rounded-0 py-4 px-lg-5 d-none text-white d-lg-block">Logout</span></> : <><span class="btn btn-primary rounded-0 py-4 px-lg-5 d-none text-white d-lg-block"> <Link to="/register" className="text-white">Register</Link>&nbsp;/&nbsp;<Link to="/login" className="text-white" >Login</Link></span></>} 

</div>
</nav>
</>
}