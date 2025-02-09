import { CiYoutube } from 'react-icons/ci';
import { FaDollarSign, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiMiniArrowsPointingOut } from 'react-icons/hi2';
import { IoBedOutline, IoLocationOutline } from 'react-icons/io5';
import { MdOutlineLiving } from 'react-icons/md';
import { PiBathtub } from 'react-icons/pi';
import { Link, useLoaderData} from 'react-router-dom';

const Details = () => {
  const details = useLoaderData();
    const {id, img, segment_name, location, title, price, description, facilities} = details;
    return (
      <div className='py-12 lg:px-14 md:px-8 sm:px-4 max-sm:px-2'>
        <div className='mb-3'>
          <div className='flex gap-4 justify-between items-center'>
            <div>
              <h3 className='text-3xl font-semibold mb-2'>{title}</h3>
            </div>
            <div className='flex gap-4'>
              <span className='flex justify-center items-center'><IoBedOutline className='mr-1'></IoBedOutline> {facilities.bedrooms}</span>
              <span className='flex justify-center items-center'><MdOutlineLiving className='mr-1'></MdOutlineLiving> {facilities.living_rooms}</span>
              <span className='flex justify-center items-center'><PiBathtub className='mr-1'></PiBathtub> {facilities.showers}</span>
              <span className='flex justify-center items-center'><HiMiniArrowsPointingOut className='mr-1'></HiMiniArrowsPointingOut> {facilities.area}</span>
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <div className='flex gap-4 justify-between items-center'>
            <div className='flex gap-4'>
              <p className='text-xl flex items-center mb-2 after:content-["|"] after:text-main after:pl-2'><FaDollarSign className='text-main '></FaDollarSign> {price}</p>
              <p className='text-xl after:content-["|"] after:text-main after:pl-2'>For sale</p>
              <p className='text-xl mb-2 flex items-center'><IoLocationOutline className='text-main mr-2'></IoLocationOutline> {location}</p>
            </div>
            
            <div className="text-xl flex items-center gap-3">
              <Link to='https://facebook.com' target="_blank"><FaFacebook></FaFacebook></Link>
              <Link to='https://x.com' target="_blank"><FaXTwitter></FaXTwitter></Link>
              <Link to='https://x.com' target="_blank"><FaInstagram></FaInstagram></Link>
              <Link to='https://x.com' target="_blank"><CiYoutube className='text-2xl'></CiYoutube> </Link>
            </div>
          </div>
        </div>
        
        <div className='relative w-full h-full single-home-wrapper'>
          <img className='single-img w-full' src={img} alt={segment_name} />
          <div className='single-home-overlay absolute bg-[#000000] bg-opacity-30 hover:bg-opacity-10 duration-500 top-0 left-0 p-3 w-full h-full'>
            <div className='flex flex-col justify-between w-full h-full'>
              <div className='flex justify-between'>
                <span className='bg-third text-white px-2 py-1 text-[14px]'>Featured</span>
                <div className=''>
                  <span className='bg-main text-white px-2 py-1 text-[14px]'>Rentals</span>
                  <span className='ml-2 bg-main text-white px-2 py-1 text-[14px]'>Active</span>
                </div>
              </div>
              <div className=''>
                <span className='text-white font-bold text-[14px]'>{location}</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
  )
}

export default Details