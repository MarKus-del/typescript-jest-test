import { IndividalCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividalCustomer => {
  return new IndividalCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividalCustomer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Fulano', 'da silva', '111.111');
    expect(sut).toHaveProperty('firstName', 'Fulano');
    expect(sut).toHaveProperty('lastName', 'da silva');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods get name and idn for individual customer', () => {
    const sut = createIndividualCustomer('Fulano', 'da silva', '111.111');
    expect(sut.getName()).toBe('Fulano da silva');
    expect(sut.getIDN()).toBe(sut.cpf);
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer(
      'Empresa fantasia inc.',
      '234.9564/51',
    );

    expect(sut).toHaveProperty('name', 'Empresa fantasia inc.');
    expect(sut).toHaveProperty('cnpj', '234.9564/51');
  });

  it('should have methods get name and idn for enterprise customer', () => {
    const sut = createEnterpriseCustomer(
      'Empresa fantasia inc.',
      '234.9564/51',
    );

    expect(sut.getName()).toBe('Empresa fantasia inc.');
    expect(sut.getIDN()).toBe('234.9564/51');
  });
});
