import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



function Navbar (){

    const loginData=useSelector(state=>state.authData.value)
    console.log("login data from selector is ",loginData)
    console.log("isLoginData is :",JSON.stringify(loginData.isLogin))


    return<>     
           <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link to="/Category" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 className="m-0 text-primary">{loginData.isLogin?<>Hello :{loginData.name.charAt(0).toUpperCase()+loginData.name.slice(1)}</>:<>JobEntry</>}</h1>
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0 ">
                    <Link to="/" className="nav-item nav-link ">Home</Link>
                    <Link to="/About" className="nav-item nav-link">About</Link>
                    <Link to="/Category" className="nav-item nav-link">Job Category</Link>

                    {loginData.isLogin? <> {loginData.type=="Admin"?<></>:<></>}
                                           {loginData.type=="Hr"?<></>:<></>}
                                           {loginData.type=="Candidate"? <><Link to="/Job_list" className="nav-item nav-link">Job List</Link>
                                                                            <Link to="/Detail" className="nav-item nav-link">Job Detail</Link>
                                                                            <Link to="/Detail" className="nav-item nav-link">Profile</Link>
                                                                            <Link to="/Jobs" className="nav-item nav-link">Jobs</Link>
                                                                            <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                                                                         </>
                                                                        : <></>}</>
                                       :
                                        <>
                                            <Link to="/Jobs" className="nav-item nav-link">Jobs</Link>
                                            <Link to="/Contact" className="nav-item nav-link">Contact</Link>
                                        </>
                    }
                    {loginData.isLogin ?<><Link to="/" className="btn btn-primary rounded-0 py-4 px-lg-5  d-lg-block mx-3 ">Logout<i className="fa fa-arrow-right ms-3"></i></Link></>
                                        :
                                        <> <Link to="/Register" className="btn btn-primary rounded-0 py-4 px-lg-5  d-lg-block mx-3 ">Register<i className="fa fa-arrow-right ms-3"></i></Link>
                                           <Link to="/Login" className="btn btn-primary rounded-0 py-4 px-lg-5  d-lg-block">Login</Link></>
                    } 
                </div>

                
            </div>
        </nav>
    </>
    }
    export default Navbar;


                        {/* <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu rounded-0 m-0">
                            <Link to="/Category" className="dropdown-item">Job Category</Link>
                            <Link to="/" className="dropdown-item">Testimonial</Link>
                            <Link to="/" className="dropdown-item">404</Link>
                        </div>
                    </div> */}


                        {/* <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</Link>
                        <div className="dropdown-menu rounded-0 m-0">
                            <Link to="/Job_list" className="dropdown-item">Job List</Link>
                            <Link to="/Detail" className="dropdown-item">Job Detail</Link>
                        </div>
                    </div> */}