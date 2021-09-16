export function generateDummyPosts(amount: number): any {
    return new Array(amount).fill(null).map((e, i) => ({
        id: `${i}`,
        title: `Post ${i}`,
        body: `Post body ${i}`,
        author: null,
        comments: [],
    }));
}

export const posts = [...generateDummyPosts(10)];
