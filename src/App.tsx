import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OrderPickup from './pages/OrderPickup';
import ShipNationwide from './pages/ShipNationwide';
import Catering from './pages/Catering';
import Rewards from './pages/Rewards';
import Events from './pages/Events';

function App() {
  return (
		<div  className="text-5xl font-bold tracking-[1rem] leading-none gap-4">
			Now this <br /> is epic <br /> <span className="uppercase">theempanandasbox.com <br /> order now</span> <br />
			class Solution: <br />
			<span className="ml-8">public static void printHelloWorld() &#123; <br />
				<span className="ml-16">
					public static void main(String[] args) &#123; <br />
					 <span className="ml-24">System.out.println(&quot;Hello World&quot;) <br /></span>
					<span className="ml-16">&#125;</span> <br />
				</span>
			&#125;
			</span>

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/OrderPickup" element={<OrderPickup/>} />
				<Route path="/ShipNationwide" element={<ShipNationwide/>} />
				<Route path="/Catering" element={<Catering/>} />
				<Route path="/Rewards" element={<Rewards/>} />
				<Route path="/Events" element={<Events/>} />
				<Route path="*" element={<h1>404 <br /> Page Not Found</h1>} />
			</Routes>
			
		</div>
  )
}

export default App
