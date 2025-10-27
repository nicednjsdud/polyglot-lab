
/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags : string[];
  content : string;
  thumbNailUrl? : string;
};

type Partial<T> = {
  [Key in keyof T]?: T[Key];
};

const draft : Partial<Post> = {
  title : "제목 나중에 짓자",
  content : "초안...",
};

/**
 * Required<T>
 * -> 필수적인, 필요한
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [Key in keyof T]-?: T[Key];
};

const withThumbnailPost : Required<Post> = {
  title : "첫 번째 게시글",
  tags : ["공지"],
  content : "내용...",
  thumbNailUrl : "http://....",
};

/**
 * Readonly<T>
 * -> 읽기 전용의
 * -> 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 타입
 */

type Readonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

const readonlyPost : Readonly<Post> = {
  title : "읽기 전용 게시글",
  tags : ["읽기전용"],
  content : "내용...",
};

// readonlyPost.title = "수정 불가"; // Error