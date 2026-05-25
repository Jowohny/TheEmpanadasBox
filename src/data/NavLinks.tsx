export interface Link {
	label: string
	path: string
}

const NavLinks: Link[] = [
	{ label: 'Home', path: '/' },
	{ label: 'Order Pickup', path: '/OrderPickup' },
	{ label: 'Shipped Boxes', path: '/ShipNationwide' },
	{ label: 'Catering', path: '/Catering' },
	{ label: 'Events', path: '/Events' },
	{ label: 'Rewards', path: '/Rewards' },
];

export default NavLinks