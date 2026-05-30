import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export interface FAQ {
	question: string
	answer: ReactNode
}

const FAQs: FAQ[] = [
	{
		question: 'How should I store my empanadas when they arrive?',
		answer: (
			<ul>
				<li><strong>In the Freezer:</strong> Keep them frozen for up to 60 days.</li>
				<li><strong>In the Fridge:</strong> If you plan to bake and eat them within a few days, you can store them right in the refrigerator.</li>
			</ul>
		)
	},
	{
		question: 'Do I need to thaw them before cooking?',
		answer: (
			<p>Yes! For the absolute best results, let the empanadas thaw completely before heating. This ensures they bake evenly and the crust achieves its signature flaky texture.</p>
		)
	},
	{
		question: 'What are the cooking instructions?',
		answer: (
			<div>
				<h4>Oven Method</h4>
				<ol>
					<li>Preheat your oven to 400°F.</li>
					<li>Line a baking tray with parchment paper and space your thawed empanadas evenly.</li>
					<li>Bake for 10-15 minutes until the crust is golden brown and flaky.</li>
				</ol>
				<h4>Air Fryer Method</h4>
				<ol>
					<li>Set your air fryer to 400°F.</li>
					<li>Place 1-3 empanadas in the basket (do not overcrowd).</li>
					<li>Cook for 12-14 minutes, flipping halfway through, for a perfect crust and a hot filling.</li>
				</ol>
			</div>
		)
	},
	{
		question: 'Do you offer vegetarian or vegan options?',
		answer: (
			<p>Yes! We want everyone to enjoy our empanadas. Our product pages explicitly tag items that fit vegetarian or vegan dietary preferences so you can build the perfect box for your lifestyle. Our empanadas are made with wheat and are not gluten-free.</p>
		)
	},
	{
		question: 'Do you offer catering for private or corporate events?',
		answer: (
			<p>
				Yes! Our empanadas are the perfect, mess-free finger food for corporate meetings, weddings, private parties, and community gatherings. You can place an order <Link to="/Catering">here</Link> or email us at <a href="mailto:theempanadasbox1@gmail.com">theempanadasbox1@gmail.com</a>.
			</p>
		)
	},
	{
		question: 'How far in advance do I need to place a catering order?',
		answer: (
			<p>
				For large event orders, we require at least 2 days' notice. If you want to place a catering order on short notice, under 2 days, please reach out to <a href="mailto:theempanadasbox1@gmail.com">theempanadasbox1@gmail.com</a>.
			</p>
		)
	},
	{
		question: 'Can I sell your empanadas at my cafe, grocery store, or market?',
		answer: (
			<p>
				We love partnering with local businesses! We offer competitive wholesale pricing for cafes, coffee shops, specialty grocers, and food trucks looking to add a high-quality, delicious item to their menu. Please reach out to <a href="mailto:theempanadasbox1@gmail.com">catering@empanadasbox.com</a> if interested!
			</p>
		)
	},
	{
		question: 'How are wholesale orders delivered or shipped?',
		answer: (
			<p>
				We can arrange for local delivery/pickup or schedule regular palletized shipping depending on your location and storage capacity. All wholesale orders are shipped frozen and securely packed. Please reach out to <a href="mailto:theempanadasbox1@gmail.com">general@empanadasbox.com</a> if interested!
			</p>
		)
	}
]

export default FAQs
