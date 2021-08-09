import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return undefined', () => {
    // System Under Test
    const sut = new Persistency();

    expect(sut).toBeInstanceOf(Persistency);
    expect(sut).toHaveProperty('saveOrder');
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    // System Under Test
    const sut = new Persistency();
    const consoleSpyn = jest.spyOn(console, 'log');

    sut.saveOrder();
    expect(consoleSpyn).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso"', () => {
    // System Under Test
    const sut = new Persistency();
    const consoleSpyn = jest.spyOn(console, 'log');

    sut.saveOrder();
    expect(consoleSpyn).toHaveBeenCalledWith('Pedido salvo com sucesso');
  });
});
