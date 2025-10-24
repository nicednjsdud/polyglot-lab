// 타입 별칭
let user : {
  id: number;
  name: string;
  isAdmin: boolean;
  brithday: string; 
} = {
  id: 1,
  name: "Alice",
  isAdmin: true,
  brithday: "2020-01-01"
}

let user2 : {
  id: number;
  name: string;
  isAdmin: boolean;
  brithday: string; 
} = {
  id: 1,
  name: "Alice",
  isAdmin: true,
  brithday: "2020-01-01"
}

// 위와 같이 동일한 타입을 여러번 사용해야 하는 경우 타입 별칭(type alias)을 사용

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
  brithday: string; 
};

let user3: User = {
  id: 3,
  name: "Charlie",
  isAdmin: false,
  brithday: "2020-01-01"
};

let user4: User = {
  id: 4,
  name: "Dave",
  isAdmin: true,
  brithday: "2020-01-01"
};

function func() {
  type User = {};   // 함수 내부에서만 사용 가능한 user 타입 별칭
};

// 인덱스 시그니처

type CountryCodes = {
  [key: string]: string; // 모든 키가 string 타입이고 값이 string 타입인 객체
};

let countryCodes : CountryCodes = {
  Korea : 'ko',
  USA : 'us',
  Japan : 'jp',
};

type CountryNumberCodes = {
  [key: string]: number; // 모든 키가 string 타입이고 값이 number 타입인 객체
};

let countryNumberCodes : CountryNumberCodes = {
  Korea : 410,
  USA : 840,
  Japan : 392,
};

// 위배는 아니지만 권장하지는 않음
let countryNumberCodes2 = {};