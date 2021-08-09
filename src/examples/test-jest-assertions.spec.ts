describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);

    // Para comparações entre objetos
    expect(number).toEqual(10);

    expect(number).not.toBeNull();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);

    expect(number).toBeCloseTo(10.001);

    expect(number).toHaveProperty('toFixed');
  });
});

describe('Objects values', () => {
  it('should test jest assertions', () => {
    const person = { name: 'Fulano', age: 20 };
    const personShadow = { ...person };

    expect(person).toEqual(personShadow);
    expect(person).toHaveProperty('age', 20);
    expect(person).not.toHaveProperty('cnpj');
    expect(personShadow.name).toBe(person.name);
  });
});
