import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OrderPickup from './pages/OrderPickup';
import ShipNationwide from './pages/ShipNationwide';
import BoxBuilder from './pages/BoxBuilder';
import Catering from './pages/Catering';
import Rewards from './pages/Rewards';
import Events from './pages/Events';
import FAQs from './pages/FAQs';

function App() {
  return (
		<>
			<Banner />
			<div className="sticky top-0 z-40 w-screen motion-safe:animate-[drop-in_0.5s_ease-out_0.12s_both]">
				<Navbar />
			</div>

			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/OrderPickup" element={<OrderPickup/>} />
				<Route path="/ShipNationwide" element={<ShipNationwide/>} />
				<Route path="/ShipNationwide/build/:size" element={<BoxBuilder/>} />
				<Route path="/Catering" element={<Catering/>} />
				<Route path="/Rewards" element={<Rewards/>} />
				<Route path="/Events" element={<Events/>} />
				<Route path="/FAQs" element={<FAQs/>} />
				<Route path="*" element={<h1>404 <br /> Page Not Found</h1>} />
			</Routes>

			<Footer />
		</>		
  )
}

export default App
