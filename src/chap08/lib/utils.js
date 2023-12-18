const AUTHOR = 'YAMADA, Yoshihiro';

export function getTriangleArea(base, height) {
  return base * height / 2;
}

export class Member {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log(`わたしは${this.name} ${this.age}歳です`);
  }
}