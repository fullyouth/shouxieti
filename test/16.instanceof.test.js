import { _instanceof } from "../src/16.instanceof";

describe('instanceof functions', () => {
  it('_instanceof', () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    Person.prototype.getAge = function(){
      return this.age
    }
    
    let zhq = new Person('zhq', 18);
    expect(_instanceof(zhq, Person)).toBe(true)
  })
  it('_instanceof not', () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    Person.prototype.getAge = function(){
      return this.age
    }
    
    let zhq = {}
    expect(_instanceof(zhq, Person)).toBe(false)
  })

  it('_instanceof not object', () => {
    expect(_instanceof('', '')).toBe(false)
    expect(_instanceof('', {})).toBe(false)
    expect(_instanceof({}, '')).toBe(false)
  })
});