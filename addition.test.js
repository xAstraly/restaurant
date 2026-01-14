const { default: expect } = require('expect');
const { calculerAddition, appliquerReduction } = require('./addition');

test('plat à 15€ + boisson à 5€ = 20€', () => {
  expect(calculerAddition(15, 5)).toBe(20);
});