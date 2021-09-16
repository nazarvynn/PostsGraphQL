import { gql } from 'apollo-server';

export default gql`
    schema {
        query: Query
        mutation: Mutation
        subscription: Subscription
    }

    scalar Phone

    directive @phoneFormat(reason: String = "Use phone format +xx (xxx) xxx-xxxx") on FIELD_DEFINITION | ENUM_VALUE

    "Post"
    type Post {
        "The unique identifier for the Post"
        id: ID!
        "The post's title"
        title: String
        "The post's body"
        body: String
        "The post's owner"
        author: Author
        "Comments related to the post"
        comments: [Comment]
    }

    "Post Connection"
    type PostConnection {
        data: [Post]
        info: ConnectionInfo
    }

    "Connection Info."
    type ConnectionInfo {
        page: Int!
        total: Int
        pages: Int
    }

    "Comment"
    type Comment {
        "The unique identifier for the Comment"
        id: ID!
        "The comment owner name"
        name: String
        "The comment owner email"
        email: String
        "The comment's body"
        body: String
    }

    "Author"
    type Author {
        "The unique identifier for the Author"
        id: ID!
        "The author name"
        name: String
        "The author user name"
        username: String
        "The author email"
        email: String
        "The author address"
        address: Address
    }

    "Address"
    type Address {
        "Address street"
        street: String
        "Address suite"
        suite: String
        "Address city"
        city: City
        "Address zipcode"
        zipcode: String
        "Address phone"
        phone: Phone @phoneFormat
    }

    enum City {
        LVIV
        KYIV
        ODESSA
        RIVNE
    }

    type Query {
        "Get all posts"
        posts: [Post]
        "Get post by ID"
        postById(id: ID!): Post
        "Get paginated posts"
        postsPaginated(page: Int = 1, pageSize: Int = 5): PostConnection!
        "Get all comments"
        comments: [Comment]
        "Get all authors"
        authors: [Author]
        "Get authors by city"
        authorsByCity(city: City!): [Author]
    }

    type Mutation {
        "Create Post"
        createPost(input: CreatePostInput!): Post
        "Update Post"
        updatePost(id: ID!, input: UpdatePostInput!): Post
        "Delete Post"
        deletePost(id: ID!): Boolean
        "Create Comment"
        createComment(postId: ID!, input: CreateCommentInput!): Comment
        "Update Comment"
        updateComment(id: ID!, input: UpdateCommentInput!): Comment
        "Delete Comment"
        deleteComment(id: ID!): Boolean
    }

    type Subscription {
        postDeleted: Post
    }

    "Create Post Input"
    input CreatePostInput {
        "The post's title"
        title: String!
        "The post's body"
        body: String!
    }

    "Update Post Input"
    input UpdatePostInput {
        "The post's title"
        title: String
        "The post's body"
        body: String
    }

    "Create Comment Input"
    input CreateCommentInput {
        "The comment owner name"
        name: String!
        "The comment owner email"
        email: String!
        "The comment's body"
        body: String!
    }

    "Update Comment Input"
    input UpdateCommentInput {
        "The comment owner name"
        name: String
        "The comment owner email"
        email: String
        "The comment's body"
        body: String
    }
`;
