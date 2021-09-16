const createComment = (comment, { postId, input }, { dataSources }, info) => {
    return dataSources.commentsAPI.createComment(postId, input);
};
const updateComment = (comment, { id, input }, { dataSources }, info) => {
    return dataSources.commentsAPI.updateComment(id, input);
};
const deleteComment = (comment, { id }, { dataSources }, info) => {
    return dataSources.commentsAPI.deleteComment(id);
};

export { createComment, updateComment, deleteComment };
