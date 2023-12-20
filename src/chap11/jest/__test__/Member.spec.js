import Member from '../Member.js';

describe('Jestの基本', () => {
  const NAME = '大谷翔平';
  let m;
  beforeEach(() => {
    m = new Member(NAME);
  });
  afterEach(() => {
    console.log('Test is done');
  });
  it('test greet method', () => {
    let result = m.greet();
    expect(m.name).toBe(NAME);
    expect(result).toContain(NAME);
  });
});