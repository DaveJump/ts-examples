// base usage

interface Square {
  color: string
  area: number
  readonly name: string
}

interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare (config: SquareConfig): Square {
  let newSquare: Square = {color: 'red', area: 100, name: 'DaveJump'}
  let { color, width } = config
  if (color) {
    newSquare.color = color
  }
  if (width) {
    newSquare.area = Math.pow(width, 2)
  }
  return newSquare
}

let mySquare = createSquare({color: 'black'})
