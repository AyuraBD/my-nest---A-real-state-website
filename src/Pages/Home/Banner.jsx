import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/controller';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'


const Banner = () => {
  return (
		<div>
			<Swiper 
			navigation={true}
			controller={true}
			allowSlideNext={true}
			allowSlidePrev={true}
			autoplay
			loop
			modules={Navigation} 
			className="mySwiper h-[100vh] z-0">
				<SwiperSlide>
					<div className='relative w-full lg:h-full'>
						<img className='w-full' src={banner1} alt="an image of a house" />
						<div className='absolute w-full h-full flex flex-col justify-center items-center top-0 left-0 bg-[#000000] bg-opacity-50'>
							<div className='lg:w-3/5 md:w-4/5 sm:w-4/5 max-sm:w-11/12 text-center m-auto p-8'>
								<h3 className='font-playfair lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-xl font-bold mb-6 text-white'>Welcome to <i>My Nest</i></h3>
								<h1 className='font-playfair lg:text-[45px] md:text-3xl sm:text-2xl max-sm:text-[22px] font-bold mb-4 text-white'>Find Your Dream Property with us</h1>
								<p className='text-white mb-4'>Explore a wide range of residential and commercial properties tailored to your needs. Your perfect space is just a click away.</p>
								<button className='bg-main border font-semibold border-main px-5 py-2 text-white hover:bg-transparent hover:text-main duration-500'>Browse Listings</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative w-full lg:h-full'>
						<img className='w-full' src={banner2} alt="an image of a house" />
						<div className='absolute w-full h-full flex flex-col justify-center items-center top-0 left-0 bg-[#000000] bg-opacity-50'>
							<div className='lg:w-3/5 md:w-4/5 sm:w-4/5 max-sm:w-11/12 text-center m-auto p-8'>
								<h3 className='font-playfair lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-xl font-bold mb-6 text-white'>Why Choose Us?</h3>
								<h1 className='font-playfair lg:text-[45px] md:text-3xl sm:text-2xl max-sm:text-[22px] font-bold mb-4 text-white'>Trusted Experts in Real Estate</h1>
								<p className='text-white mb-4'>With years of experience and a commitment to excellence, we offer personalized guidance to help you buy, sell, or rent properties effortlessly.</p>
								<button className='bg-main border font-semibold border-main px-5 py-2 text-white hover:bg-transparent hover:text-main duration-500'>Learn More</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='relative w-full lg:h-full'>
						<img className='w-full' src={banner3} alt="an image of a house" />
						<div className='absolute w-full h-full flex flex-col justify-center items-center top-0 left-0 bg-[#000000] bg-opacity-50'>
							<div className='lg:w-3/5 md:w-4/5 sm:w-4/5 max-sm:w-11/12 text-center m-auto p-8'>
								<h3 className='font-playfair lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-xl font-bold mb-6 text-white'>Featured Properties</h3>
								<h1 className='font-playfair lg:text-[45px] md:text-3xl sm:text-2xl max-sm:text-[22px] font-bold mb-4 text-white'>Discover Our Latest Listings</h1>
								<p className='text-white mb-4'>From luxurious villas to budget-friendly apartments, find properties that fit your lifestyle and budget.</p>
								<button className='bg-main border font-semibold border-main px-5 py-2 text-white hover:bg-transparent hover:text-main duration-500'>View All Listings</button>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
  )
}

export default Banner