import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";

import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";

interface PostsTableProps {
    limit?: number;
    title?: string;
}

const PostsTable = ({ limit, title }: PostsTableProps) => {
    const sortedPosts: Post[] = [...posts].sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
    const filterdPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
    return (
        <div className="mt-10">
            <h3 className="text-2xl mb-4 font-semibold">
                {title ? title : "Posts"}
            </h3>
            <Table>
                <TableCaption>A List Of Recent Posts</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Author</TableHead>
                        <TableHead className="hidden md:table-cell text-center">Date</TableHead>
                        <TableHead className="">View</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterdPosts.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                            <TableCell className="text-center hidden md:table-cell">{post.date}</TableCell>
                            <TableCell>
                                <Link href={`/posts/edit/${post.id}`}>
                                    <button className="text-white bg-blue-500 hover:bg-blue-700 text-xs py-2 px-4 rounded">Edit</button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default PostsTable;