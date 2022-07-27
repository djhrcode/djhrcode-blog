import { PostEntity } from "~/modules/post/domain/PostEntity";

export interface PostRepository {
    getBySlug(slug: string): PostEntity;
    getAllSlugs(prefix?: string): string[];
}