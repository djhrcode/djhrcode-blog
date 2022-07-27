import dayjs from 'dayjs'
 

export function formatArticleDate(date: string): string {
    return dayjs(date).format("MMM DD, YYYY");
}