import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://ap-south-1.cdn.hygraph.com/content/clct4lrt204hi01un3rnc8s4y/master',
	cache: new InMemoryCache(),
});
