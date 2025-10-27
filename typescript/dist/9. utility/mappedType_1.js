/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */
;
const draft = {
    title: "제목 나중에 짓자",
    content: "초안...",
};
const withThumbnailPost = {
    title: "첫 번째 게시글",
    tags: ["공지"],
    content: "내용...",
    thumbNailUrl: "http://....",
};
const readonlyPost = {
    title: "읽기 전용 게시글",
    tags: ["읽기전용"],
    content: "내용...",
};
export {};
// readonlyPost.title = "수정 불가"; // Error
