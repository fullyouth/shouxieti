import { _new } from "../src/15.new";

describe('new functions', () => {
  it('_new', () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    Person.prototype.getAge = function(){
      return this.age
    }
    
    let zhq = _new(Person, 'zhq', 18);
    expect(zhq.name).toBe('zhq')
    expect(zhq.getAge()).toBe(18)
  })

  it('_new', () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
      return this
    }
    Person.prototype.getAge = function(){
      return this.age
    }
    
    let zhq = _new(Person, 'zhq', 18);
    expect(zhq.name).toBe('zhq')
    expect(zhq.getAge()).toBe(18)
  })
});