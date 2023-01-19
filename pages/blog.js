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

export default function Blog({ blogs }) {
	return (
		<>
			<h1>Work with me</h1>
			{blogs.map((item) => (
				<Card
					shadow='lg'
					p='lg'
					style={{
						maxWidth: 340,
						margin: 'auto',
						marginBottom: '2em',
					}}
					key={item.slug}
				>
					<Text weight={800} style={{ textAlign: 'start' }}>
						{item.title}
					</Text>
					<Text size='md' style={{ lineHeight: 1.5 }}>
						{item.description}
					</Text>
				</Card>
			))}
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query Blogs {
				blogs {
					title
					description
					tags
					createdDate
					body {
						html
					}
					slug
				}
			}
		`,
	});
	const { blogs } = data;
	return {
		props: {
			blogs,
		},
	};
}