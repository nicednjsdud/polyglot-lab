/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 특정 객체 타입에서 원하는 프로퍼티들만 뽑아 새로운 객체 타입을 만들어주는 타입
 */
;
const legacyPost = {
    title: "레거시 포스트",
    content: "내용...",
};
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbNailUrl', 'title'>>
// Pick<Post, 'tags' | 'content' | 'thumbNailUrl'>
const noTitlePost = {
    content: "내용...",
    tags: ["태그"],
    thumbNailUrl: "http://....",
};
export {};
