import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './contexts/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
		<BrowserRouter>
			<StrictMode>
				<CartProvider>
					<App />
				</CartProvider>
			</StrictMode>
		</BrowserRouter>
)
