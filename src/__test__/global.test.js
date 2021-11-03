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