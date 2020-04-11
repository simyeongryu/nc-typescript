// 파라미터와 반환값에 타입 지정
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, You are ${age}, you are a ${gender}`;
};

console.log(sayHi("Simyeong", 28, "male"));

export {};
