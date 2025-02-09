import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import { IoClose } from 'react-icons/io5';

const Profile = () => {
  const {user, loading, setLoading, updateUserProfile} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  console.log(user);

  const handleUpdateProfile = (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const photo = formData.get('photo');
    setError('');
    updateUserProfile({
      displayName: name,
      photoURL: photo,
    })
    .then(()=>{
      setError('');
      if(loading){
        return <span className="text-center h-full loading loading-ring loading-lg"></span>
      }
    })
    .catch((err)=>setError(err.message))

  }
  return (
    <div className='relative py-12 lg:px-14 md:px-8 sm:px-4 max-sm:px-2 duration-500'>
      <div className='bg-[#eceaea] p-4 rounded-lg mb-4'>
        <h1 className='text-3xl text-center font-semibold'>Your profile</h1>
      </div>
      <div className='lg:w-2/3 m-auto lg:flex justify-center items-center gap-6'>
        <div className='bg-[#eceaea] text-center p-4 rounded-lg lg:w-1/3 sm:mb-6 max-sm:mb-3'>
            <img className='w-50 h-50 m-auto rounded-full' src={user.photoURL} alt={user.displayName} />
          <div className='text-center'>
            <h3 className='text-2xl font-bold'>{user.displayName}</h3>
            <p>Store manager</p>
          </div>
          <div className='text-center'>
            <button onClick={() =>setIsOpen(true)} className='bg-main text-white font-semibold px-4 py-2 mt-2 rounded-md'>Update profile</button>
          </div>
        </div>
        <div className='lg:w-2/3 p-4'>
          <h3 className='text-2xl mb-2'>Name: <span  className='text-2xl font-semibold'>{user.displayName}</span></h3>
          <p className='text-xl mb-2'>Email: <span className='text-xl'>{user.email}</span></p>
        </div>
      </div>
      {/* Pop ups */}
      {isOpen && (
        <div className='absolute top-[20%] lg:right-[25%] md:right-[20%] sm:right-[15%] max-sm:right-[10%] m-auto lg:w-1/2 md:w-2/3 sm:w-3/4 max-sm:w-4/5 shadow-lg bg-[#f5f2f2] p-4 rounded-lg mt-4 duration-500'>
          <div className='relative'>
            <h1 className='text-2xl text-center'>Update your profile</h1>
            <IoClose onClick={() => setIsOpen(false)} className='absolute top-2 right-2 text-2xl cursor-pointer'></IoClose>
          </div>

          {/* Form to update profile */}          
          <form onSubmit={handleUpdateProfile} className="card-body pt-3 p-4">
            <div className="form-control">
              <input type="text" name="name" placeholder="Your name" className="py-2 px-2 border-b focus:outline-0 placeholder:text-slate-700"/>
            </div>
            <div className="form-control">
              <input type="text" name="photo" placeholder="Your photo URL" className="py-2 px-2 border-b focus:outline-0 placeholder:text-slate-700"/>
            </div>
            <div className="form-control">
              {error && <p className="text-[#f31818]">{error}</p>}
            </div>
            <div className="mt-5 text-center">
              <input type="submit" value="Update profile" className="bg-main border border-main hover:bg-transparent hover:text-main duration-500 text-white px-8 py-2 text-black font-semibold cursor-pointer"/>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Profile