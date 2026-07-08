export interface Empanada {
	name: string
	image: string
	description: string
	tags: string[]
}

const Empanadas: Empanada[] = [
		{
			name: 'Buenos Aires',
			image: '/EmpanadaPics/Items Photos/BUENOS AIRES.jpg',
			description: 'Ground beef, onion, bell pepper, green onion',
			tags: ['beef', 'spicy']
		},
		{
			name: 'Bordeaux',
			image: '/EmpanadaPics/Items Photos/BORDEAUX.jpg',
			description: 'Red wine braised short rib, bell pepper, tomato',
			tags: ['beef']
		},
		{
			name: 'Capri',
			image: '/EmpanadaPics/Items Photos/CAPRI.jpg',
			description: 'Tomato, mozzarella, parmesan, fresh basil, oregano',
			tags: ['vegetarian']
		},
		{
			name: 'Chicago',
			image: '/EmpanadaPics/Items Photos/CHICAGO.jpg',
			description: 'Pepperoni, mozzarella, oregano',
			tags: ['pork']
		},
		{
			name: 'Jamaica',
			image: '/EmpanadaPics/Items Photos/JAMAICA.jpg',
			description: 'Jerk chicken, green onion',
			tags: ['chicken', 'spicy']
		},
		{
			name: 'Louisiana',
			image: '/EmpanadaPics/Items Photos/LOUISIANA.jpg',
			description: 'Cajun corn, onion, bell pepper, vegan cheese, green onion',
			tags: ['vegan']
		},
		{
			name: 'Miami',
			image: '/EmpanadaPics/Items Photos/MIAMI.jpg',
			description: 'Marinated pork, swiss cheese, pickles, mustard',
			tags: ['pork']
		},
		{
			name: 'Mumbai',
			image: '/EmpanadaPics/Items Photos/MUMBAI.jpg',
			description: 'Potato & pea samosa',
			tags: ['vegan', 'spicy']
		},
		{
			name: 'New England',
			image: '/EmpanadaPics/Items Photos/NEW ENGLAND.jpg',
			description: 'Chicken breast, onion, carrot, green pea, bechamel',
			tags: ['chicken']
		},
		{
			name: 'Philly',
			image: '/EmpanadaPics/Items Photos/PHILLY.jpg',
			description: 'Steak, onion, bell pepper, provolone',
			tags: ['beef']
		},
		{
			name: 'Singapore',
			image: '/EmpanadaPics/Items Photos/SINGAPORE.jpg',
			description: 'Garlic buttered spinach, mozzarella, parmesan',
			tags: ['vegetarian']
		},
		{
			name: 'Buffalo',
			image: '/EmpanadaPics/Items Photos/BUFFALO.jpg',
			description: 'Buffalo chicken, mozzerella',
			tags: ['chicken', 'spicy']
		} 
]

export default Empanadas