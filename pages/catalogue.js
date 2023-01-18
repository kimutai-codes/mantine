import {
	Grid,
	Card,
	Image,
	Text,
	Badge,
	Button,
	Group,
	Center,
} from '@mantine/core';
import { Check, Dashboard, Database, Mail, Video } from 'tabler-icons-react';
import { client } from '../utils/apolloClient';
import { gql } from '@apollo/client';

export default function Catalogue({ workWithMes }) {
	return (
		<>
			<h1>Work with me</h1>
			<Grid grow gutter='xs'>
				{workWithMes.map((item) => (
					<Grid.Col key={item.title} span={4}>
						<Card
							shadow='lg'
							p='lg'
							style={{
								maxWidth: 340,
								margin: 'auto',
								marginBottom: '2em',
							}}
						>
							<Group
								position='apart'
								style={{
									marginBottom: 5,
									marginTop: 'sm',
								}}
							>
								<Text
									weight={800}
									style={{ textAlign: 'center' }}
								>
									{item.title}
								</Text>
								<Badge
									variant='gradient'
									gradient={{ from: '', to: '#F783AC' }}
								>
									KES {item.price}
								</Badge>
								<Text size='md' style={{ lineHeight: 1.5 }}>
									{item.description.text}
								</Text>
							</Group>

							<Group
								style={{
									padding: '14px 0',
									display: 'flex',
									flexDirection: 'row',
								}}
							>
								<Button
									color='lime'
									variant='gradient'
									gradient={{
										from: '#66D9E8',
										to: 'teal',
										deg: 60,
									}}
									fullWidth
									component='a'
									href='#'
									leftIcon={<Mail color='#FF8787' />}
								>
									Inquire via email
								</Button>
								<Button
									variant='gradient'
									gradient={{
										from: '#63E6BE',
										to: '#74C0FC',
										deg: 60,
									}}
									fullWidth
									component='a'
									href='#'
									leftIcon={<Video color='#4DABF7' />}
								>
									Book zoom call
								</Button>
							</Group>
						</Card>
					</Grid.Col>
				))}
			</Grid>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query catalogueData {
				workWithMes {
					price
					title
					description {
						text
					}
				}
			}
		`,
	});
	const { workWithMes } = data;
	return {
		props: {
			workWithMes,
		},
	};
}
