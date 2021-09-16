import { RESTDataSource } from 'apollo-datasource-rest';

export class PostsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://jsonplaceholder.typicode.com/';
    }
    async getPosts() {
        return await this.get('posts');
    }
    async getPostById(id: number) {
        return await this.get(`posts/${id}`);
    }
    async createPost(body: { title: string; body: string }) {
        return await this.post('posts', body);
    }
    async updatePost(id: number, body: { title: string; body: string }) {
        return await this.put(`posts/${id}`, body);
    }
    async deletePost(id: number) {
        return await this.delete(`posts/${id}`);
    }
}
