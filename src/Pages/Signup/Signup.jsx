import { useContext, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/Authprovider";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const [error, setError] = useState('');
  const {createUser,loginWithFb, loginWithGoogle, loading} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleSignUp = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const photo = formData.get('photo');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    setError('');
    if(password.length < 6){
      setError('Your password should be at least 6 characters long.');
      return;
    } else if(!/(?=.*[a-z])/.test(password)){
      setError('Your password should have include a small letter character.');
      return;
    } else if(!/(?=.*[A-Z])/.test(password)){
      setError('Your password should have include a Capital letter character.');
      return;
    } else if(!/(?=.*\d)/.test(password)){
      setError('Your password should have include one number.');
      return;
    }else if(!/(?=.*[@$!%*?&])/.test(password)){
      setError('Your password should have include a special character.');
      return;
    } else if(!regex.test(password)){
      setError('Your password is invalid.');
      return;
    }else{
      setError('');
    }

    if(password !== confirmPassword){
      setError("Your password doesn't matched.");
      return;
    }
    e.target.reset();
    setError('');
    createUser(email, password)
    .then((res)=>{
      setError('');
      if(loading){
        return <span className="text-center loading loading-ring loading-lg"></span>
      }
      toast.success('Account created successfully.');
      navigate(location?.state ? location.state : '/');
      updateProfile(res.user, {displayName: name, photoURL: photo})
      .then(()=>{
        
      })
      .catch(err =>{
        setError(err.message);
      })
    })
    .catch((error)=>{
      setError(error.message);
    })
     
  }

  const handleFbLogin = () =>{
    loginWithFb()
    .then(()=>{
      setError('');
      toast.success('You are logged in successfully');
      navigate(location?.state ? location.state : '/');
    })
    .catch(err =>{
      setError(err.message);
    })
  }
  const handleGoogleLogin = () =>{
    loginWithGoogle()
    .then(()=>{
      setError('');
      toast.success('You are logged in successfully');
      navigate(location?.state ? location.state : '/');
    })
    .catch(err =>{
      setError(err.message);
    })
  }

  return (
    <div className="py-12 lg:px-14 md:px-8 sm:px-4 max-sm:px-2">
      <div className="mb-8">
        <h1 className="text-center text-3xl font-bold">Connect with us</h1>
      </div>
      <div className="container lg:flex m-auto px-2 lg:px-16">
        <div className="p-5 lg:w-1/2 m-auto">
          <h3 className="text-2xl font-bold">Create an account</h3>
          <form onSubmit={handleSignUp} className="card-body pt-3 px-0 pb-0">
            <div className="form-control">
              <input type="text" name="name" placeholder="Your name" className="py-2 px-2 border-b focus:outline-0 placeholder:text-slate-700" required />
            </div>
            <div className="form-control">
              <input type="text" name="photo" placeholder="Your photo URL" className="py-2 px-2 border-b focus:outline-0 placeholder:text-slate-700" required />
            </div>
            <div className="form-control">
              <input type="text" name="email" placeholder="Your Email" className="py-2 px-2 border-b focus:outline-0 placeholder:text-slate-700" required />
            </div>
            <div className="form-control border-b ">
              <div className="flex justify-between items-center">
                <input type={showPassword ? 'password' : 'text'} name="password" placeholder="Password" className="py-2 px-2 focus:outline-0 placeholder:text-slate-700 w-full" required />
                <div onClick={()=>setShowPassword(!showPassword)} className="flex justify-center items-center cursor-pointer">
                  {showPassword ? <IoMdEyeOff></IoMdEyeOff> : <IoMdEye></IoMdEye>}
                </div>
              </div>
            </div>
            <div className="form-control border-b ">
              <div className="flex justify-between items-center">
                <input type={showConfirmPassword ? 'password' : 'text'} name="confirmPassword" placeholder="Confirm password" className="py-2 px-2 focus:outline-0 placeholder:text-slate-700 w-full" required />
                <div onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="flex justify-center items-center cursor-pointer">
                  {showConfirmPassword ? <IoMdEyeOff></IoMdEyeOff> : <IoMdEye></IoMdEye>}
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#e02222]">{error}</p>
            </div>
            <div className="mt-5">
              <input type="submit" value="Create an account" className="bg-main border border-main hover:bg-transparent hover:text-main duration-500 text-white w-full  py-2 text-black font-semibold cursor-pointer"/>
            </div>
            <div className="mt-3 text-center">
              <p>Already have an account? <Link to='/login' className="text-[#2a3ef1]">Login</Link></p>
            </div>
          </form>
        </div>
        <div className="p-5 lg:w-1/2 m-auto text-center relative">
          <div className="lg:block md:hidden sm:hidden max-sm:hidden mb-2 absolute left-7 top-[40%] -rotate-90">
            <p className="orselection font-bold">Or</p>
          </div>
          <div className="mb-2 lg:hidden">
            <p className="orselection-mob font-bold">Or</p>
          </div>
          <div className="px-16">
            {/* Facebook */}
            <button onClick={handleFbLogin} className="w-full">
              <div className="facebook mb-3 flex justify-start items-center border rounded-full p-2">
                <div className="bg-[#3076FF] w-8 h-7 flex justify-center items-center text-white rounded-full">
                  <FaFacebookF></FaFacebookF>
                </div>
                <div className="flex justify-center w-full">
                <span className="font-semibold">Continue with Facebook</span>
                </div>
              </div>
            </button>
            {/* Google */}
            <button onClick={handleGoogleLogin} className="w-full">
              <div className="facebook flex justify-start items-center border rounded-full p-2">
                <div className="w-8 h-7 flex justify-center items-center">
                  <FcGoogle className="text-3xl"></FcGoogle>
                </div>
                <div className="flex justify-center w-full">
                <span className="font-semibold">Continue with Google</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Signup;
