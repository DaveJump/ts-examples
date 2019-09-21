// interface extends interface

interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Round extends Shape, PenStroke {
  sideLength: number
}

let square = {} as Round
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5
