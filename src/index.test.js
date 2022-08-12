const addTwo = (a, b) => a + b;

it('adds two numbers', () => {
  expect(addTwo(1, 2)).toBe(3);
});

const shoppingList = ['krakersy', 'chipsy', 'bułki', 'apple'];

it('contains healthy food', () => {
  expect(shoppingList).toContain('apple');
});

const priceCount = price => price + 100;

it('Every price is bigger than 100', () => {
  expect(priceCount(1)).toBeGreaterThan(100);
});
