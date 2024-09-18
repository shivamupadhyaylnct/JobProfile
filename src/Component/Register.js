import { useRef, useState } from "react"
import { URLS} from "../Service/ApiServices"
import ApiServices from "../Service/ApiServices"
import { Navigate } from "react-router-dom"

function Register(){

    const [isApiCalling, setIsApiCalling]= useState(false)
    const [msg, setMsg]= useState("")
    const [passwordError, setPasswordError]= useState("")


    const Name =useRef()
    const Email =useRef()
    const Phone =useRef()
    const Education =useRef()
    const Passout =useRef()
    const Password =useRef()
    const ConformPassword =useRef()
    

    const handleRegister= async (event)=>{
        event.preventDefault()

        if (Password.current.value == ConformPassword.current.value) {
            setPasswordError(""); 
        } else {
            setPasswordError("Passwords do not match!")
            return; 
        }

        var obj={
             fullname:Name.current.value,
             phone:Phone.current.value,
             email:Email.current.value,
             password:Password.current.value,
             education:Education.current.value,
             passoutyear:Passout.current.value
           }
        console.log(obj)
        console.log(URLS.REGISTER_API)

        try{ 
            setIsApiCalling(true)
            const res= await ApiServices.postApiCall(URLS.REGISTER_API,obj)
            console.log(res)
            console.log(JSON.stringify(res))
            console.log(res.data.message) 
            // console.log(res.data.data[0].message) 
            console.log(res.data.status)        

            if(res.data.status===true){
                setIsApiCalling(true)
                setMsg(res.data.message)
                setTimeout(() => { setMsg("") }, 5000)
                //   
                
            }else{
                setIsApiCalling(false)
                setMsg(res.data.data[0].message)
                setTimeout(() => { setMsg("") }, 5000)
            }

        }catch(error){
            console.log("catch error:", error.message)     
            setMsg("Some Error Occure Try Again",error.message)
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
                        <h1 className=" text-center mb-5 wow fadeInUp bg-primary w-100 py-3" data-wow-delay="0.1s">Register Here</h1>
                            <form onSubmit={handleRegister}>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" ref={Name} className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email"ref={Email} className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" ref={Phone} className="form-control" id="Phone no" placeholder="Phone No"/>
                                            <label for="Phone No">Phone No</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" ref={Education} className="form-control" id="Education" placeholder="Education"/>
                                            <label for="Education">Education</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" ref={Passout} className="form-control" id="Passout Year" placeholder="Passout Year"/>
                                            <label for="Passout Year">Passout Year</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="Password" ref={Password}  className="form-control" id="Password" placeholder="Password"/>
                                            <label for="">Password</label> 

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="Password" ref={ConformPassword}  className="form-control" id="Conform Password" placeholder="Conform Password"/>
                                            <label for="Conform Password">Conform Password</label>
                                        </div>
                                    </div>
                                    <h6 className="text-danger">{passwordError}</h6>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                         {isApiCalling == true  ? "Saved": "Save" }
                                        </button>
                                    </div>
                                    <div>
 {isApiCalling == true ? <h6 className="text-primary">{msg}</h6>:<h6 className="text-danger">{msg}</h6> } 
                                    </div>
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
export default Register;