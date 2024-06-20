'use client';
import BackButton from "@/components/BackButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import posts from "@/data/posts";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import moment from "moment";

const FormSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    body: z.string().min(1, { message: "Body is required" }),
    author: z.string().min(1, { message: "Author is required" }),
    date: z.string().min(1, { message: "Date is required" }),
});

interface PostEditPageProps {
    params: {
        id: string;
    }
}

const PostEditPage = ({ params }: PostEditPageProps) => {
    const post = posts.find((post) => post.id === params.id);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            title: post?.title ?? "",
            body: post?.body ?? "",
            author: post?.author ?? "",
            date: post?.date ?? "",
        },
    });

    function onSubmit(values: z.infer<typeof FormSchema>) {
        console.log(values);
    }

    const { toast } = useToast();
    return (
        <>
            <BackButton text="Back to Posts" link="/posts" />
            <h3 className="text-2xl mb-5">Edit Post</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Title</FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Enter Title"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Body</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Enter Body"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Author</FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Enter Author"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Date</FormLabel>
                                <FormControl>
                                    <Input
                                        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                                        placeholder="Enter Date"
                                        value={moment(Date.now()).format('YYYY-MM-DD')}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        onClick={() => {
                            toast({
                                title: "Post has been updated successfully",
                                description: `Updated by ${post?.author} on ${moment(Date.now()).format('YYYY-MM-DD')}`,
                            });
                        }}
                        className="w-full dark:bg-slate-800 dark:text-white"
                    >
                        Update Post
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default PostEditPage;
