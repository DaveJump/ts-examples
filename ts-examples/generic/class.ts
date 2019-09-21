// generic class

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

let myGenericString = new GenericNumber<string>()
myGenericString.zeroValue = 'str'
myGenericString.add = function (x, y) {
  return x + y
}

class BeeKeeper {
  hasMask: boolean
}

class LionKeeper {
  nameTag: string
}

class Animal2 {
  numTengs: number
}

class Bee extends Animal2 {
  keeper: BeeKeeper
}

class Lion extends Animal2 {
  keeper: LionKeeper
}

function createInstance<T extends Animal2> (c: new() => T): T {
  return new c()
}

console.log(createInstance(Lion).keeper.nameTag)
console.log(createInstance(Bee).keeper.hasMask)
