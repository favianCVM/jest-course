const cities = ['ciudad mx', 'buenosaires', 'caracas', 'barcelona', 'new york' ]

const randomStrings = () => {
  let string = cities[Math.floor(Math.random()*cities.length)]

  return string
}

//promise function to test
const reverseString2 = (string = "") => {
  return new Promise((resolve, reject) => {
    if(!string) return reject(Error("error"))

    resolve(string.split("").reverse().join(""))
  })
}


module.exports = {
  reverseString2,
  randomStrings
}