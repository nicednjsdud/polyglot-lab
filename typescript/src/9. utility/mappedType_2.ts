
/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 특정 객체 타입에서 원하는 프로퍼티들만 뽑아 새로운 객체 타입을 만들어주는 타입
 */

interface Post {
  title: string;
  tags : string[];
  content : string;
  thumbNailUrl? : string;
};

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbNailUrl'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbNailUrl'
  [Key in K]: T[Key];
};

const legacyPost : Pick<Post, "title" | "content"> = {
  title : "레거시 포스트",
  content : "내용...",
};

/**
 * Omit<T, K>
 * -> 생략하다
 * -> 특정 객체 타입에서 일부 프로퍼티들을 제외한 나머지 프로퍼티들로 새로운 객체 타입을 만들어주는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbNailUrl', 'title'>>
// Pick<Post, 'tags' | 'content' | 'thumbNailUrl'>

const noTitlePost : Omit<Post, 'title'> = {
  content : "내용...",
  tags : ["태그"],
  thumbNailUrl : "http://....",
}



/**
 * Record<K, V>
 */

type ThumbNailLegacy = {
  large : {
    url : string
  },
  medium : {
    url : string
  },
  small : {
    url : string
  },
  watch : {
    url : string
  }
};

type Record<K extends keyof any, V> = {
  [Key in K]: V;
};

type thumbNail = Record<keyof ThumbNailLegacy, { url : string}>;



