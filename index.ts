// type Input <T> = T[]
// interface Output <T> {
//   timestamp: Date
//   value: T[]
// }

// let alpha: Input<string> = [4, 5, 6]
// console.log(alpha)
// const beta: Input<number> = ['a']
// console.log(beta)
// const gamma: Output<number> = { timestamp: new Date(), value: [1] }
// const delta: Output<string> = { timestamp: new Date(), value: ['hello'] }

// const input: string = 'hello'

// function add (a: number, b: number) {
//   return a + b
// }
// add(1, 5)
// add(2, 6)
// add(2, true)

// const letters = ['a', 'b', 'c']
// letters.map((letter: string | number) => {
//   if (typeof letter === 'string') {
//     letter.toUpperCase()
//   }
//   console.log(letter)
// })

interface Input <T> {
  creatorName: string
  data: T
}

function label <T> (input: Input<T>) {
  return {
    date: new Date(),
    value: input.data
  }
}

const stringOutput = label({ creatorName: 'Dorothy', data: 'hello' })
const numberOutput = label({ creatorName: 'Tallulah', data: 100 })

function formatString (value: string) {
  console.log(value.toUpperCase())
}
function formatNumber (value: number) {
  console.log(value.toFixed(2))
}

formatString(stringOutput.value)
formatNumber(numberOutput.value)