class Human {
  // 생성자
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  // 멤버변수.
  // 어떤 속성과 권한을 갖고 있는지 선언해줘야 한다.
  public name: string;
  public age: number;
  public gender: string;
}

const simyeong = new Human("simyeong", 29, "male");

// object를 함수의 파라미터로 사용하는 방법
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, You are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(simyeong));

export {};
