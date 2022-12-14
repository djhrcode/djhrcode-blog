import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Post } from "~/modules/post/components/Post";
import { PostContent } from "~/modules/post/components/PostContent";
import { PostFooter } from "~/modules/post/components/PostFooter";
import { PostHeader } from "~/modules/post/components/PostHeader";
import { PostEntity } from "~/modules/post/domain/PostEntity";
import { PostRepository } from "~/modules/post/repository/PostRepository";

const BlogPostPage: NextPage<BlogPostPageProps> = function (props) {
    console.log("post", props);

    return (
        <Post>
            <PostHeader
                title={props.post.data.title}
                description={props.post.data.description}
                tags={props.post.data.tags}
                date={props.post.data.date}
                readingTime={props.post.data.readingTime}
                category={props.post.data.category}
            ></PostHeader>
            <PostContent content={props.post.content}></PostContent>
            <PostFooter tags={props.post.data.tags}></PostFooter>
        </Post>
    );
};

export type BlogPostPageProps = { post: PostEntity };

export const getStaticPaths: GetStaticPaths = function () {
    return {
        fallback: false,
        paths: PostRepository().getAllSlugs(),
    };
};

export const getStaticProps: GetStaticProps = function ({ params }) {
    return {
        props: {
            post: PostRepository().getBySlug(params?.post?.toString() ?? ""),
        },
    };
};

BlogPostPage.displayName = "BlogPostPage";

export default BlogPostPage;
