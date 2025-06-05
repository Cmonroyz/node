import { getAge } from "../../src/plugins";

describe("getAge Plugin", () => {
  test('getAge() should return the age of a person', () => {
    const birthdate = "1991-05-005";
    const age = getAge(birthdate);
    expect(typeof age).toBe('number');
  });
  // spi
  test('getAge() should return 0', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    const birthdate = "1995-05-05";
    const age = getAge(birthdate);
    expect(age).toBe(0);
  });
});