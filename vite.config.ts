import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Serves api/shipping-rates.ts during `npm run dev` so the form has a real endpoint
// to talk to. The Shippo key stays in this Node process and is never sent to the client.
function shippoDevApi(env: Record<string, string>): PluginOption {
	return {
		name: 'shippo-dev-api',
		configureServer(server) {
			server.middlewares.use('/api/shipping-rates', async (req, res, next) => {
				// guard the assignment: `process.env.X = undefined` stores the STRING "undefined"
				if (!process.env.SHIPPO_API_KEY && env.SHIPPO_API_KEY) {
					process.env.SHIPPO_API_KEY = env.SHIPPO_API_KEY
				}
				try {
					const mod = await server.ssrLoadModule('/api/shipping-rates.ts')
					await mod.default(req, res)
				} catch (error) {
					next(error)
				}
			})
		},
	}
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	return {
		plugins: [react(), tailwindcss(), shippoDevApi(env)],
		resolve: {
			alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
		},
	}
})
