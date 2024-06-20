import posts from "@/data/posts";

export async function generateStaticParams() {
    return posts.map(post => ({
        id: post.id,
    }));
}
