import { characters } from '../../src/js-foundation/destructuring';


describe('js foundation destructuring.ts', () => {
  test('characters should contain Batman', () => {
    expect(characters).toContain('Batman');
  });
});