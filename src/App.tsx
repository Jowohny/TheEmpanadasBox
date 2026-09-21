import { Routes, Route, useLocation } from 'react-router-dom';
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
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
	const location = useLocation()

  return (
		<>
			<Banner />
			<div className="sticky top-0 z-40 w-screen motion-safe:animate-[drop-in_0.5s_ease-out_0.12s_both]">
				<Navbar />
			</div>

			<div key={location.pathname} className="motion-safe:animate-[page-in_0.7s_ease-out]">
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/OrderPickup" element={<OrderPickup/>} />
					<Route path="/ShipNationwide" element={<ShipNationwide/>} />
					<Route path="/ShipNationwide/build/:size" element={<BoxBuilder/>} />
					<Route path="/Catering" element={<Catering/>} />
					<Route path="/Rewards" element={<Rewards/>} />
					<Route path="/Events" element={<Events/>} />
					<Route path="/FAQs" element={<FAQs/>} />
					<Route path="/AboutUs" element={<AboutUs/>} />
					<Route path="/ContactUs" element={<ContactUs/>} />
					<Route path="*" element={<h1>404 <br /> Page Not Found</h1>} />
				</Routes>
			</div>

			<Footer />
		</>		
  )
}

export default App
