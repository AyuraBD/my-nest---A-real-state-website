import { FaDollarSign } from 'react-icons/fa';
import { HiMiniArrowsPointingOut } from 'react-icons/hi2';
import { IoBedOutline } from 'react-icons/io5';
import { MdOutlineLiving } from 'react-icons/md';
import { PiBathtub } from 'react-icons/pi';
import { useLoaderData } from 'react-router-dom'

const Residentials = () => {
    const residential = useLoaderData();
		const {id, title, img, segment_name, description, price, status, pool, location, facilities} = residential;
  return (
    <div className='py-12 lg:px-14 md:px-8 sm:px-4 max-sm:px-2'>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1">
				{residential.map((res)=> <div key={res.id} res={res}>
					<div className='shadow-lg'>
						<div className='relative w-full h-full'>
							<img src={res.img} alt={res.segment_name} />
							<div className='absolute bg-[#000000] bg-opacity-10 top-0 left-0 p-3 w-full h-full'>
								<div className='flex flex-col justify-between w-full h-full'>
									<div className='flex justify-between'>
										<span className='bg-third text-white px-2 py-1 text-[14px]'>Featured</span>
										<div className=''>
											<span className='bg-main text-white px-2 py-1 text-[14px]'>Rentals</span>
											<span className='ml-2 bg-main text-white px-2 py-1 text-[14px]'>Active</span>
										</div>
									</div>
									<div className=''>
										<span className='text-white font-bold text-[14px]'>{res.location}</span>
									</div>
								</div>
							</div>
						</div>
						<div className='p-3'>
							<h3 className='text-2xl font-semibold mb-2'>{res.title}</h3>
							<p className='text-main text-xl font-semibold flex items-center mb-2'><FaDollarSign></FaDollarSign> {res.price}</p>
							<p className='mb-2'>{res.description}</p>
							<div className='flex gap-4'>
								<span className='flex justify-center items-center'><IoBedOutline className='mr-2'></IoBedOutline> {res.facilities.bedrooms}</span>
								<span className='flex justify-center items-center'><MdOutlineLiving className='mr-2'></MdOutlineLiving> {res.facilities.living_rooms}</span>
								<span className='flex justify-center items-center'><PiBathtub className='mr-2'></PiBathtub> {res.facilities.showers}</span>
								<span className='flex justify-center items-center'><HiMiniArrowsPointingOut className='mr-2'></HiMiniArrowsPointingOut> {res.facilities.area}</span>
							</div>
						</div>
					</div>
				</div>)}
			</div>
    </div>
  )
}

export default Residentials