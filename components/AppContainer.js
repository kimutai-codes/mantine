import {
	ActionIcon,
	Anchor,
	AppShell,
	Burger,
	Drawer,
	Footer,
	Group,
	Header,
	MediaQuery,
	Menu,
	Text,
	Button,
} from '@mantine/core';
import Link from 'next/link';
import React, { useState } from 'react';
import { Home, Menu2, Settings } from 'tabler-icons-react';

const Appcontainer = ({ children }) => {
	// const [opened, setOpened] = useState(false);
	return (
		<AppShell
			styles={{
				main: {
					background: '#FFF',
					width: '100vw',
					height: '100vh',
					paddingLeft: '0px',
				},
			}}
			fixed
			header={
				<Header
					height={50}
					p='md'
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					{/* logo */}
					<Link href='/' passHref>
						<ActionIcon component='a'>
							<Home />
						</ActionIcon>
					</Link>
					{/* links */}
					<Group position='right'>
						<Anchor href='/blog'>Blog</Anchor>
						<Anchor href='/projects'>Projects</Anchor>
						{/* //style this one to be attention grabbing */}
						<Anchor href='/catalogue'>Catalogue</Anchor>
						<Anchor href='/links'>Links</Anchor>
					</Group>
					{/* menu I love this media query..the way it stays in contexts */}
					{/* <Drawer
						// opened={opened}
						// onClose={() => setOpened(false)}
						padding='xl'
						size='sm'
						position='top'
					>
						<ul styles={{ style: 'none' }}>
							<li>
								<Link href='/about'>
									<a>About</a>
								</Link>
							</li>
							<li>
								<a href='/prices'>Prices</a>
							</li>
						</ul>
					</Drawer>
					<MediaQuery
						query='(min-width:5px)'
						styles={{ display: 'none' }}
					>
						<ActionIcon>
							<Menu2 />
						</ActionIcon>
					</MediaQuery> */}
				</Header>
			}
		>
			{children}
		</AppShell>
	);
};

export default Appcontainer;
