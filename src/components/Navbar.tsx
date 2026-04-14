import EBLogo from '../assets/empanadasboxlogo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const tabItems = [
		{tabName: 'Home', webTitle: '/Home'},
		{tabName: 'Order Pickup', webTitle: '/OrderPickup'}, 
		{tabName: 'Ship Nationwide', webTitle: '/ShipNationwide'}, 
		{tabName: 'Catering', webTitle: '/Catering'}, 
		{tabName: 'Events', webTitle: '/Events'}, 
		{tabName: 'Rewards', webTitle: '/Rewards'}, 
		{tabName: 'More', webTitle: '/*'}
	];

	return (
		<div className='min-w-full flex flex-row items-center py-4'>
			<div className='flex flex-1 flex-row items-center gap-3 justify-start mx-4'>
				<img src={EBLogo} className='w-20 h-20 aspect-square'/>
				<h1 className='text-2xl font-bold'>The Empanadas Box</h1>
			</div>
			<div className='flex flex-row gap-12 justify-around'>
				{tabItems.map((tab) => (
					<button onClick={() => navigate(tab.webTitle)} className='font-extralight tracking-wide text-xl'>
						{tab.tabName}
					</button>
				))}
			</div>
			<div className='flex flex-1 justify-end'>
				<button type="button" className='bg-[#D09501] rounded-full font-semibold tracking-wide text-center px-6 py-3 text-xl text-white mx-6'>
					Shop
				</button>
			</div>
		</div>
	)
}

export default Navbar