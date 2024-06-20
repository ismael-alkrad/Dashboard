// /posts/edit/[id]/page.tsx
import { generateStaticParams } from './GenerateStaticParams';
import PostEditPage from '@/components/PostEditPage';

export { generateStaticParams };

interface PostEditPageProps {
    params: {
        id: string;
    }
}

const Page = ({ params }: PostEditPageProps) => {
    return <PostEditPage params={params} />;
};

export default Page;
