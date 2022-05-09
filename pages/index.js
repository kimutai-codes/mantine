import { Grid } from '@mantine/core';
import Demo from '../components/card';

export default function Home() {
	return (
    <Grid grow gutter='xs' >
      <Grid.Col span={4}>
        <Demo />
      </Grid.Col>
      <Grid.Col span={4}>
        <Demo />
      </Grid.Col>
      <Grid.Col span={4}>
        <Demo />
      </Grid.Col>
      <Grid.Col span={4}>
        <Demo />
      </Grid.Col>
      <Grid.Col span={4}>
        <Demo />
      </Grid.Col>
			</Grid>
	);
}
