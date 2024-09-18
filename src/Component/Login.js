import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ApiServices, { URLS } from "../Service/ApiServices"
import { authReducer } from "../reduxData/UserSlice";
import { useDispatch } from "react-redux";


function Login(){
     const[isloginApi,setIsLoginApi]=useState(false);
     const[loginMsg,setLoginMsg]=useState();
     
    const Email=useRef()
    const Password= useRef()
    
    const dispatch= useDispatch()
    const navigate = useNavigate()

    const Login=async(event)=>{
          event.preventDefault()

          var obj={
                 email:Email.current.value,
                 password:Password.current.value
                }
                console.log("Inserted data is",obj)
                console.log(URLS.LOGIN_API)
          
      try {
            const res=await ApiServices.postApiCall(URLS.LOGIN_API,obj)
            console.log(JSON.stringify(res))
            // console.log("message",res.data.message)
            console.log("status",res.data.status)
            

            if(res.data.status==true){
                setIsLoginApi(true)
                setLoginMsg(res.data.message)
                console.log("TRUE message",res.data.message)
                setTimeout(() => { setLoginMsg("") }, 5000)

                        const dispatchData=dispatch(authReducer({
                            name:res.data.data.name,
                            contact:res.data.data.contact,
                            token:res.data.data.token,
                            isLogin:true,
                            type:res.data.data.type
                        }))
                        console.log("dispatchd data is ",dispatchData)
                        navigate("/")
            }else{
                setIsLoginApi(false)
                setLoginMsg(res.data.message)
                // console.log("FALSE message",res.data.data[0].message)
                setTimeout(() => { setLoginMsg("") }, 5000)
                navigate("/login")
            }
           
      } catch (error) {
         setLoginMsg("error occure")
         console.log("catched error is :",error.message)
      }
    }


    return<>
     <div className="container-xxl py-5 bg-dark page-header mb-5">
            <div className="container-xxl py-5">
             {/* container start */}
            <div className="container"> 
                <div className="row g-4">
                    <div className="col-md-6 bg-dark py-5 px-4 mx-auto">
                        <div className=" wow fadeInUp" data-wow-delay="0.5s">
                        <h1 className=" text-center mb-5 wow fadeInUp bg-primary w-100 py-3" data-wow-delay="0.1s">Login Here</h1>
                            <form onSubmit={Login}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" ref={Email} className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" ref={Password} className="form-control" id="Password" placeholder="Password"/>
                                            <label for="Password">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                                    </div>
                                    <Link className="text-white primary" to="/Register">click here to Register</Link>
                                </div> 
                                <div>
                                {isloginApi == true ? 
                                     <h6 className="text-primary">{loginMsg}</h6> :
                                     <h6 className="text-danger">{loginMsg}</h6> }
                                    {/* {isloginApi== true ?<>{loginMsg}</>:<>{loginMsg}</>} */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* container end */}
            </div>
    </div>
    </>
}
export default Login