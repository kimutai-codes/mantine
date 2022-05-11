import {
	Grid,
	Card,
	Image,
	Text,
	Badge,
	Button,
	Group,
	useMantineTheme,
	Center,
} from '@mantine/core';
import { Check, Dashboard, Database, Mail, Video } from 'tabler-icons-react';
import Demo from '../components/card';

export default function Home() {
	const theme = useMantineTheme();
	const data = [
		{
			serviceName: 'Blog Development',
			price: 'Ksh 35,000',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente natus nam, est voluptates magni sint nobis mollitia.',
			features: [
				{ label: 'Netlify CMS' },
				{ label: 'Free hosting' },
				{ label: 'Fast Pages' },
				{ label: 'Working Blog' },
				{ label: 'Mobile Responsiveness' },
			],
		},
		{
			serviceName: 'E-Commerce',
			price: 'Ksh 90,000',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente natus nam, est voluptates magni sint nobis mollitia.',
			features: [
				{ label: 'Netlify CMS' },
				{ label: 'Free hosting' },
				{ label: 'Fast Pages' },
				{ label: 'Working Blog' },
				{ label: 'Mobile Responsiveness' },
			],
		},
		{
			serviceName: 'Bot-Development',
			price: 'Ksh 345,000',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente natus nam, est voluptates magni sint nobis mollitia.',
			features: [
				{ label: 'Netlify CMS' },
				{ label: 'Free hosting' },
				{ label: 'Fast Pages' },
				{ label: 'Working Blog' },
				{ label: 'Mobile Responsiveness' },
			],
		},
		{
			serviceName: 'Custom',
			price: 'Discuss',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente natus nam, est voluptates magni sint nobis mollitia.',
			features: [
				{ label: 'Netlify CMS' },
				{ label: 'Free hosting' },
				{ label: 'Fast Pages' },
				{ label: 'Working Blog' },
				{ label: 'Mobile Responsiveness' },
			],
		},
	];

	return (
		<Grid grow gutter='xs'>
			{data.map((item) => (
				<Grid.Col key={item.serviceName} span={4}>
					<Card
						shadow='sm'
						p='lg'
						style={{
							maxWidth: 340,
							margin: 'auto',
							marginBottom: '2em',
						}}
					>
						<Card.Section>
							{/* TODO image link */}
							<Image
								src='./norway.png'
								height={160}
								alt='Norway'
							/>
						</Card.Section>

						<Group
							position='apart'
							style={{
								marginBottom: 5,
								marginTop: theme.spacing.sm,
							}}
						>
							<Text weight={800} style={{ textAlign: 'center' }}>
								{item.serviceName}
							</Text>
							<Badge
								variant='gradient'
								gradient={{ from: '', to: '#F783AC' }}
							>
								{item.price}
							</Badge>
							<Text size='md' style={{ lineHeight: 1.5 }}>
								{item.description}
							</Text>
						</Group>

						<Card.Section
							style={{
								borderTop: '1px solid #CED4DA',
								marginTop: '15px',
								padding: '10px 8px',
								borderBottom: '1px solid #CED4DA',
							}}
						>
							<Group>
								{item.features.map((feature) => (
									<Center key={feature.label}>
										<Check size={18} color='#20C997' />
										<Text size='sm'>{feature.label}</Text>
									</Center>
								))}
							</Group>
						</Card.Section>
						<Group style={{ padding: '14px 0' }}>
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
								<Group>Inquire via email</Group>
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
								<Group>Book zoom call</Group>
							</Button>
						</Group>
					</Card>
				</Grid.Col>
			))}
		</Grid>
	);
}
