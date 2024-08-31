import { partial } from '../src/10.偏函数'

describe('partial function', () => {
  it('partial 测试', () => {
    const createInfo = (name, age, address) => name + age + address
    const createZhqInfo = partial(createInfo, 'zhq')
    expect(createZhqInfo('18', '上海')).toBe('zhq18上海')
  });
});
