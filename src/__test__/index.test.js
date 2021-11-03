const {randomStrings}= require('../index')

describe('test randomString functionality', () => {

  test('testing randomStrings', () => {
    expect(typeof (randomStrings())).toBe('string')
  })

  test("test if doesn't exist a city", () => {
    expect(randomStrings()).not.toMatch(/valencia/)
  })

})

