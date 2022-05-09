import { MediaQuery } from '@mantine/core';
import Demo from '../components/card';

export default function Home() {
	return (
		<MediaQuery query='(min-width:768px)' styles={{ display: 'flex',flexWrap:'wrap' }}>
			<div>
				<Demo />
				<Demo />
				<Demo />
				<Demo />
				<Demo />
			</div>
		</MediaQuery>
	);
}
