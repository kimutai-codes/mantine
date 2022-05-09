import {
	Card,
	Image,
	Text,
	Badge,
	Button,
	Group,
	useMantineTheme,
} from '@mantine/core';

export default function Demo() {
	const theme = useMantineTheme();

	return (
		<div style={{ width: 340, margin: 'auto', marginBottom: '2em' }}>
			<Card shadow='sm' p='lg'>
				<Card.Section>
					{/* maybe put a link here */}
					<Image src='./norway.png' height={160} alt='Norway' />
				</Card.Section>

				<Group
					position='apart'
					style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
				>
					<Text weight={500} style={{ textAlign: 'center' }}>
						Name of service
					</Text>
				</Group>

				<Text size='md' style={{ lineHeight: 1.5 }}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Numquam debitis tenetur quia est possimus quod qui soluta
					accusamus esse pariatur error sint in neque, voluptatum
					reiciendis consequatur commodi quidem. Consectetur?
				</Text>

				<Button
					variant='light'
					color='blue'
					style={{ marginTop: 14 }}
					fullWidth
				>
					View Details
				</Button>
			</Card>
		</div>
	);
}
