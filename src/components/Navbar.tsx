import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const tabItems = [
		{tabName: 'Home', webTitle: '/'},
		{tabName: 'Order Pickup', webTitle: '/OrderPickup'}, 
		{tabName: 'Ship Nationwide', webTitle: '/ShipNationwide'}, 
		{tabName: 'Catering', webTitle: '/Catering'}, 
		{tabName: 'Events', webTitle: '/Events'}, 
		{tabName: 'Rewards', webTitle: '/Rewards'}, 
		{tabName: 'More', webTitle: '/*'}
	];

	return (
		<div className='min-w-full h-24 flex flex-row items-center bg-white/40 backdrop-blur-2xl'>
			<div  onClick={() => navigate('/')} className='flex flex-1 flex-row items-center gap-3 justify-start mx-4'>
				<img src='/empanadasboxlogo.png' className='w-20 h-20 aspect-square'/>
				<h1 className='text-2xl font-bold'>The Empanadas Box</h1>
			</div>
			<div className='flex flex-row gap-12 justify-around'>
				{tabItems.map((tab) => (
					<button key={tab.tabName} onClick={() => navigate(tab.webTitle)} 
						className='font-extralight tracking-wide text-xl transition-all duration-200 hover:border-b-2 border-[#D09501]'
					>
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