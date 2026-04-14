import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Home from './pages/Home';
import OrderPickup from './pages/OrderPickup';
import ShipNationwide from './pages/ShipNationwide';
import Catering from './pages/Catering';
import Rewards from './pages/Rewards';
import Events from './pages/Events';

function App() {
  return (
		<>
			<Banner/>

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/OrderPickup" element={<OrderPickup/>} />
				<Route path="/ShipNationwide" element={<ShipNationwide/>} />
				<Route path="/Catering" element={<Catering/>} />
				<Route path="/Rewards" element={<Rewards/>} />
				<Route path="/Events" element={<Events/>} />
				<Route path="*" element={<h1>404 <br /> Page Not Found</h1>} />
			</Routes>
		</>		
  )
}

export default App
