import { Message } from './message';

const createSut = () => {
  return new Message();
};

describe('Message', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('Blusa comprada com sucesso')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const msg = 'Blusa comprada com sucesso';
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage(msg);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Mensagem enviada: " + value', () => {
    const sut = createSut();
    const msg = 'Blusa comprada com sucesso';
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage(msg);
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada: ' + msg);
  });
});
