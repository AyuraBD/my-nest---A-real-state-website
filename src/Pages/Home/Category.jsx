import family from './../../assets/family-homes.jpg'
import townhouse from './../../assets/townhouses.jpg'
import apartment from './../../assets/apartment.jpg'
import { Link } from 'react-router-dom';
import './Category.css'
import { IoHomeOutline } from 'react-icons/io5';
import { FaHandshake } from 'react-icons/fa';
import { MdOutlineHome } from 'react-icons/md';
import { IoIosArrowRoundForward } from "react-icons/io";



const Category = () => {
  return (
		<>
		<div className='py-12 lg:px-14 md:px-8 sm:px-4 max-sm:px-2'>
			<h1 className='text-center mb-6 text-3xl font-playfair'>Your Real Estate Journey</h1>
			<div className="grid grid-cols-3 gap-4">
				<div className='category-single flex flex-col justify-center items-center gap-4  p-8 shadow-md'>
					<div className='category-icon w-16 h-[70px] rounded-full bg-main flex justify-center items-center'>
						<IoHomeOutline className='text-white w-8 h-8'></IoHomeOutline>
					</div>
					<h3 className='text-2xl font-semibold'>Sell your home</h3>
					<p>Trusted experts to sell your home quickly.</p>
					<button className="flex justify-center items-center h-1/6">Read more <IoIosArrowRoundForward className="text-2xl w-8"></IoIosArrowRoundForward>
					</button>
				</div>
				<div className='category-single flex flex-col justify-center items-center gap-4  p-8 shadow-md'>
					<div className='category-icon w-16 h-[70px] rounded-full bg-main flex justify-center items-center'>
						<FaHandshake className='text-white w-8 h-8'></FaHandshake>
					</div>
					<h3 className='text-2xl font-semibold'>Buy a home</h3>
					<p>Turn Your Homeownership Dreams into Reality.</p>
					<button className="flex justify-center items-center h-1/6">Read more <IoIosArrowRoundForward className="text-2xl w-8"></IoIosArrowRoundForward>
					</button>
				</div>
				<div className='category-single flex flex-col justify-center items-center gap-4  p-8 shadow-md'>
					<div className='category-icon w-16 h-[70px] rounded-full bg-main flex justify-center items-center'>
						<MdOutlineHome className='text-white w-8 h-8'></MdOutlineHome>
					</div>
					<h3 className='text-2xl font-semibold'>Rent a home</h3>
					<p>Flexible Options for Modern Living.</p>
					<button className="flex justify-center items-center h-1/6">Read more <IoIosArrowRoundForward className="text-2xl w-8"></IoIosArrowRoundForward>
					</button>
				</div>
				
			</div>
			
		</div>
		<div className="category py-8 m-auto lg:px-14 md:px-8 sm:px-4 max-sm:px-2">
			<div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1">
				<Link to='/residential' className="relative h-full w-full single">
					<img className='w-full' src={family} alt="family houses" />
					<div className='overlay h-full absolute top-0 left-0 w-full bg-[#000000] bg-opacity-50'>
						<div className='overlay-text  lg:h-[90%] md:h-[90%] sm:h-[90%] max-sm:h-[92%] flex flex-col justify-center items-center border border-white m-6'>
							<h3 className='text-2xl font-bold font-playfair mb-2 text-white'>Single Family houses</h3>
							<p className='text-white'>Spacious homes for growing families.</p>
						</div>
					</div>
				</Link>
				<Link to='/residential' className="relative h-full w-full single">
					<img className='w-full' src={townhouse} alt="townhouses" />
					<div className='overlay h-full absolute top-0 left-0 w-full bg-[#000000] bg-opacity-50'>
						<div className='overlay-text  lg:h-[90%] md:h-[90%] sm:h-[90%] max-sm:h-[92%] flex flex-col justify-center items-center border border-white m-6'>
							<h3 className='text-2xl font-bold font-playfair mb-2 text-white'>Townhouses</h3>
							<p className='text-white'>Modern living in connected communities.</p>
						</div>
					</div>
				</Link>
				<Link to='/residential' className="relative h-full w-full single">
					<img className='w-full' src={apartment} alt="apartment" />
					<div className='overlay h-full absolute top-0 left-0 w-full bg-[#000000] bg-opacity-50'>
						<div className='overlay-text  lg:h-[90%] md:h-[90%] sm:h-[90%] max-sm:h-[92%] flex flex-col justify-center items-center border border-white m-6'>
							<h3 className='text-2xl font-bold font-playfair mb-2 text-white'>Apartments</h3>
							<p className='text-white'>Compact spaces with urban convenience.</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
		</>
	)
};

export default Category;
