const createPost = (post, { input }, { dataSources }, info) => {
    return dataSources.postsAPI.createPost(input);
};
const updatePost = (post, { id, input }, { dataSources }, info) => {
    return dataSources.postsAPI.updatePost(id, input);
};
const deletePost = (post, { id }, { dataSources }, info) => {
    return dataSources.postsAPI.deletePost(id);
};

export { createPost, updatePost, deletePost };
