// §8.3.1
export default class {
  // private
  #name = "";
  #birth = new Date();

  constructor(name, birth) {
    this.#name = name;
    this.#birth = new Date(birth); // should copy the value defensively
    Object.freeze(this);
  }

  get name() {
    return this.#name;
  }

  get birth() {
    return this.#birth;
  }

  #createMessage() {
    let fmt = new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    return `わたしの名前は${this.#name} 誕生日は${fmt.format(this.#birth)}です`;
  }

  withName(name) {
    return new Member(name, this.birth);
  }

  show() {
    console.log(this.#createMessage());
  }
}
