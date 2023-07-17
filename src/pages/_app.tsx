import 'tailwindcss/tailwind.css'
import '@/styles/styles.css'
import { ThemeProvider } from 'next-themes'

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
