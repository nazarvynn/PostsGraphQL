import { ASTNode, GraphQLScalarType, Kind } from 'graphql';

export const Phone = new GraphQLScalarType({
    name: 'Phone',
    description: 'Date custom scalar type',
    serialize(value) {
        // value sent to the client
        const cleaned = ('' + value).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        return match ? '(' + match[1] + ') ' + match[2] + '-' + match[3] : value;
    },
    parseValue(value) {
        // value from the client in variable
        return value;
    },
    parseLiteral(ast: ASTNode) {
        // ast value is always in string format
        return ast.kind === Kind.INT ? `${(ast as any).value}` : null;
    },
});
