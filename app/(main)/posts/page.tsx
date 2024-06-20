import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PaginationPosts from "@/components/posts/PaginationPosts";
const PostsPage = () => {
    return (
        <>
            <BackButton text="Back to Dashboard" link="/" />
            <PostsTable title="Recent Posts" />
            <PaginationPosts />
        </>
    );
}

export default PostsPage;