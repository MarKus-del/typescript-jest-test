import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createSut('Camiseta', 49.9);

    expect(sut).toBeInstanceOf(Product);
    expect(sut).toHaveProperty('name');
    expect(sut).toHaveProperty('price');
  });
});