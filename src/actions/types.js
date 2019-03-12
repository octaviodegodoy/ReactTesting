export const SAVE_COMMENT = 'save_comment'; 

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}