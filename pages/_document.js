import Document from 'next/document';
import { createGetInitialProps } from '@mantine/next';

const getInititalProps = createGetInitialProps();

export default class _Document extends Document {
	static getInititalProps = getInititalProps;
}
