import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OrderPickup from './pages/OrderPickup';
import ShipNationwide from './pages/ShipNationwide';
import Catering from './pages/Catering';
import Rewards from './pages/Rewards';
import Events from './pages/Events';

function App() {
  return (
		<>
			<Banner />
			<div className="sticky top-0 z-40 w-screen">
				<Navbar />
			</div>

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/OrderPickup" element={<OrderPickup/>} />
				<Route path="/ShipNationwide" element={<ShipNationwide/>} />
				<Route path="/Catering" element={<Catering/>} />
				<Route path="/Rewards" element={<Rewards/>} />
				<Route path="/Events" element={<Events/>} />
				<Route path="*" element={<h1>404 <br /> Page Not Found</h1>} />
			</Routes>

			<Footer />
		</>		
  )
}

export default App
