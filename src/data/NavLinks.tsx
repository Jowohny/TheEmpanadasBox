export interface Link {
	label: string
	path: string
}

const NavLinks: Link[] = [
	{ label: 'Home', path: '/' },
	{ label: 'Order Pickup', path: '/OrderPickup' },
	{ label: 'Ship Nationwide', path: '/ShipNationwide' },
	{ label: 'Catering', path: '/Catering' },
	{ label: 'Events', path: '/Events' },
	{ label: 'Rewards', path: '/Rewards' },
];

export default NavLinks