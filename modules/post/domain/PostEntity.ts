import { calculateReadingTime } from "~/modules/post/utilities/calculateReadingTime";
import { formatArticleDate } from "~/modules/post/utilities/formatArticleDate";

export interface PostEntity {
    data: {
        slug: string;
        title: string;
        cover: string;
        description: string;
        readingTime: string;
        category?: string;
        tags?: string[];
        date: string;
    };

    content: string;
}


export function createPostEntity(attrs: PostEntity): PostEntity {
    const readingTime = calculateReadingTime(attrs.content);

    return {
        data: {
            ...attrs.data,

            date: formatArticleDate(attrs.data.date),
            readingTime: readingTime > 1 ? `${readingTime} minutes` : `${readingTime} minute`
        },
        content: attrs.content,
    }
}