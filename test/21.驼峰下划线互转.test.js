import { snakeToCamel, camelToSnake } from "../src/21.驼峰下划线互转";

describe('snakeToCamel functions', () => {
  it('snakeToCamel', async () => {
    let ret = snakeToCamel('goods_name')
    return expect(ret).toEqual('goodsName');
  })

  it('camelToSnake', async () => {
    let ret = camelToSnake('goodsName')
    return expect(ret).toEqual('goods_name');
  })
  
});