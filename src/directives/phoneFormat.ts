import { GraphQLField, GraphQLEnumValue, defaultFieldResolver } from 'graphql';
import { SchemaDirectiveVisitor } from 'apollo-server';

export class PhoneFormatDirective extends SchemaDirectiveVisitor {
    public visitFieldDefinition(field: GraphQLField<any, any>) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = async (parent, args, context, info) => {
            const result = await resolve(parent, args, context, info);
            return `${result}`.toUpperCase();
        };
    }

    public visitEnumValue(value: GraphQLEnumValue) {
        value.deprecationReason = this.args.reason;
    }
}
