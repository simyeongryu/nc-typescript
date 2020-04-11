# nc-typescript
노마드코더 타입스크립트 강의 정리

# #1 Introduction and What are we building

타입스크립트로 간단한 블록체인 만들기.

타입스크립트는 자바스크립트의 superset으로 컴파일하면 자바스크립트가 된다.

버그를 최소화하거나 디버깅에 좋은 규칙들을 갖고 있는 업그레이드된 자바스크립트라고 생각하자.

# #2 Setting Typescript Up

```
yarn init
```
으로 package.json 만들기.

설치
```
yarn global add typescript
```

**tsconfing.json**이라는 파일 생성

타입스크립트가 자바스크립트로 컴파일될 때의 옵션을 지정한다.

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2015", // 컴파일 될 ECMAScript 버전
    "sourceMap": true
  },
  "include": ["index.ts"], // 어떤 파일을 컴파일할 건지
  "exclude": ["node_modules"] // 어떤 파일을 컴파일 하지 않을 건지
}
```

`index.ts` 을 만든 후

```ts
alert("hello");
```

`node.js`는 TS를 이해하지 못하기 때문에 JS로 컴파일하는 과정이 필요하다.

터미널에 `tsc`를 입력하면 ts파일이 컴파일되어 `index.js`와 `index.js.map`이 만들어진다.

`yarn start` 하면 자동으로 컴파일 및 실행이 되게 `package.json`에서 `script`에 `start`와 `prestart`를 정의한다.

```json
{
  "name": "nc-typescript",
  "version": "1.0.0",
  "description": "learn typescript by making blockchain",
  "main": "index.js",
  "repository": "https://github.com/simyeongryu/nc-typescript",
  "author": "simyeongryu <rsm0503@gmail.com>",
  "license": "MIT",
  "scripts": {
    "start": "node index.js",
    "prestart": "tsc"
  }
}
```

# #3 First steps with Typescript

typed 언어. 어떤 종류의 변수와 데이터인지 설정해줘야 한다.

타입스크립트의 강점은 미리 변수의 데이터 타입이나, 파라미터 설정 등에 강제를 걸어서 실수를 방지하는 것이다.

```ts
const name = "Simyeong",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender) => {
  console.log(`Hello ${name}, You are ${age}, you are a ${gender}`);
};

// Expected 3 arguments, but got 2.
// 컴파일되지 않는다.
sayHi(name, age);

export {};
```

```ts
const name = "Simyeong",
  age = 24,
  gender = "male";

  // 파라미터에 ?를 붙이면 해당 파라미터는 선택사항이 된다.
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, You are ${age}, you are a ${gender}`);
};

sayHi(name, age); // gender의 위치에 undefined 출력

export {};
```