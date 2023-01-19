import { gql } from '@apollo/client';
import React from 'react';
import { client } from '../../utils/apolloClient';

export default function BlogPage() {
	return <div></div>;
}

//we'll get the paths based on the slug
export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query Blogs {
				blogs {
					slug
				}
			}
		`,
	});
	const { blogs } = data;
	const paths = blogs.map((blog) => ({
		params: {
			slug: blog.slug,
		},
	}));
	console.log(blogs);
	return { paths, fallback: false };
}

//get specific document based on the above path
export async function getStaticProps(params) {}
