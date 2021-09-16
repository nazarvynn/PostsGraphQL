import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { applyMiddleware } from 'graphql-middleware';
import { GraphQLSchema } from 'graphql';

import typeDefs from './schema';
import resolvers from './resolvers';
import { AuthorsAPI, CommentsAPI, PostsAPI } from './datasources';
import { PhoneFormatDirective } from './directives';
import { logger } from './middlewares';

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const server = new ApolloServer({
    schema: applyMiddleware(schema, logger),
    dataSources: () => ({
        postsAPI: new PostsAPI(),
        commentsAPI: new CommentsAPI(),
        authorsAPI: new AuthorsAPI(),
    }),
    schemaDirectives: {
        phoneFormat: PhoneFormatDirective,
    },
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
