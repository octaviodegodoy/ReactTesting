export const SAVE_COMMENT = 'save_comment';
export const FETCH_COMMENTS = 'fetch_comments'; 

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}