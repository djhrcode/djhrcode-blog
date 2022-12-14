import filesystem from "node:fs";
import { markdownToProps } from "~/common/utilities/markdown/markdownToProps";
import { createPostEntity, PostEntity } from "~/modules/post/domain/PostEntity";
import { PostRepository } from "~/modules/post/domain/PostRepository";

const POSTS_DIRECTORY = "/home/djhrcode/djhrcode/djhrcode-blog/.data/posts";

export function PostRepository(): PostRepository {
    return {
        getBySlug(slug) {
            const markdownFile = filesystem.readFileSync(
                `${POSTS_DIRECTORY}/${slug}.md`,
                { encoding: "utf-8" }
            );
            const markdownProps =
                markdownToProps<PostEntity["data"]>(markdownFile);

            return createPostEntity({
                data: { ...markdownProps.data, slug },
                content: markdownProps.content,
            });
        },

        getAllSlugs(prefix = "/blog/") {
            return filesystem
                .readdirSync(POSTS_DIRECTORY)
                .filter((fileName) => fileName.endsWith(".md"))
                .map((fileName) => `${prefix}${fileName.replace(/.md$/g, "")}`);
        },
    };
}
