import { generateDummyPosts } from '../../data';
import { paginate } from '../../util';

const posts = (post, args, { dataSources }, info) => {
    return dataSources.postsAPI.getPosts();
};

const postById = (post, args, { dataSources }, info) => {
    return dataSources.postsAPI.getPostById(args.id);
};

const postAuthor = (post, args, { dataSources }, info) => {
    return dataSources.authorsAPI.getAuthorById(post.userId);
};

const postComments = (post, args, { dataSources }, info) => {
    return dataSources.commentsAPI.getCommentsByPostId(post.id);
};

const postsPaginated = (parent, { page, pageSize }, context) => {
    const results = [...generateDummyPosts(100)];

    return paginate({
        arr: results,
        pageNumber: page,
        pageSize: pageSize,
    });
};

export { posts, postById, postAuthor, postComments, postsPaginated };
