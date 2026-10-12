import { existsSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function devApi(env: Record<string, string>): PluginOption {
	return {
		name: 'dev-api',
		configureServer(server) {
			for (const [key, value] of Object.entries(env)) {
				if (value && !process.env[key]) process.env[key] = value
			}

			server.middlewares.use(async (req, res, next) => {
				const name = req.url?.split('?')[0].match(/^\/api\/([a-z0-9-]+)$/)?.[1]
				if (!name) return next()
				if (!existsSync(fileURLToPath(new URL(`./api/${name}.ts`, import.meta.url)))) return next()
				try {
					const mod = await server.ssrLoadModule(`/api/${name}.ts`)
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
		plugins: [react(), tailwindcss(), devApi(env)],
		resolve: {
			alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
		},
	}
})
