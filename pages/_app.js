import { MantineProvider } from '@mantine/core';
import Appcontainer from '../components/AppContainer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{ colorScheme: 'light' }}
		>
			<Appcontainer>
				<Component {...pageProps} />
			</Appcontainer>
		</MantineProvider>
	);
}

export default MyApp;
