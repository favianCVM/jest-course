const {reverseString2} = require('../index')

const testText = "lorem ipsum"
const fruits = ['apple', 'melon', 'pineapple']

test('text test', () => {
  expect(testText).toMatch(/lorem ipsum/)
})

test('fruit test apple', () => {
  expect(fruits).toContain('apple')
})

test('bigget than test', () => {
  expect(10).toBeGreaterThan(9)
})

test('should be true', () => {
  expect(true).toBeTruthy()
});

const reverseString = (string, callback) => {
  callback(string.split('').reverse().join(""))
}

test('callback test', () => {
  reverseString('message', (str) => {
    expect(str).toBe('egassem')
  })
})


test("promise test", () => {
  return reverseString2('hola')
    .then(string => expect(string).toBe('aloh'))
})

test('async/await test', async () => {
  const string = await reverseString2('hola');
  expect(string).toBe('aloh');

})

//functions that will be called before and after the test runs

// afterEach(() => {
//   console.log('after test ------')
// })

// afterAll(()=>{
//   console.log('after all test -----');
// })

// beforeEach(()=> {
//   console.log('before test -------')
// })

// beforeAll(() => {
//   console.log('before all test -------')
// })


