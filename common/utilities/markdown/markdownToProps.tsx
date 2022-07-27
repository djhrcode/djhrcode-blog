import grayMatter from "gray-matter";

export type MarkdownProps<P = {}> = {
    data: P;
    content: string;
    original: string | Buffer;
};

export function markdownToProps<P = {}>(markdown: string): MarkdownProps<P>  {
    const markdownProps = grayMatter(markdown);

    return {
        data: markdownProps.data as P,
        original: markdownProps.orig,
        content: markdownProps.content,
    }
}
