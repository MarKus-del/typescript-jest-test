import { Discount, FiftyPercentDiscount, NoDiscount } from './discount';

const createSut = (classname: new () => Discount): Discount => {
  return new classname();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    const price = 10.99;
    expect(sut.calculate(price)).toBe(price);
  });

  it('should apply fifty percent discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    const price = 100;
    expect(sut.calculate(price)).toBeCloseTo(price * 0.5);
  });
});
