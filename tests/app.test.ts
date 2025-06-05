


describe('App', () => {
  test('should be 3', () =>{
    // 1 arrange
      const number = 1;
      const number2 = 2;
    // 2 act
      const result = number + number2;
    // 3 assert
      expect(result).toBe(3);
  });
});