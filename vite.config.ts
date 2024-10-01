import { defineConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const viteConfig = defineConfig({
	plugins: [react()]
})

const vitestConfig = defineVitestConfig({
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/tests/setup.ts'
	}
})

export default { ...viteConfig, ...vitestConfig }
