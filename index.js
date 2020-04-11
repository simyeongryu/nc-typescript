"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Simyeong", age = 24, gender = "male";
// 파라미터에 ?를 붙이면 해당 파라미터는 선택사항이 된다.
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, You are ${age}, you are a ${gender}`);
};
sayHi(name, age);
//# sourceMappingURL=index.js.map