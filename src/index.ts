// type을 지정해놓는다.
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "simyeong",
  age: 28,
  gender: "male"
};

// object를 함수의 파라미터로 사용하는 방법
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, You are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};
