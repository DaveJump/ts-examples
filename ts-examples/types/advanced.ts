/**
 * mix type
 */

function extend<T, U> (x: T, y: U): T & U {
  let assigned = {} as T & U
  for (let key in x) {
    assigned[key] = x[key] as any
  }
  for (let key in y) {
    if (!Object.prototype.hasOwnProperty.call(assigned, key)) {
      assigned[key] = y[key] as any
    }
  }
  return assigned
}

class Man {
  constructor (public name: string) {

  }
}

interface Log {
  log()
}

class Logger implements Log {
  log () {
    console.log('logger!!')
  }
}

let jim = extend(new Man('Jimmy'), new Logger())

console.log(jim.name)
console.log(jim.log)

/**
 * union type
 */

function padLeft (value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`'padding' expected string or number, got ${typeof padding}`)
}

console.log(padLeft('Hello World', 4))

interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

function getSmallPet (): Bird | Fish {
  return {} as Bird | Fish
}

let pet = getSmallPet()
pet.layEggs()
// pet.fly() // error, property 'fly' does not exist on type 'Fish'

// type protection
function isBird (pet: Bird | Fish): pet is Bird {
  return (pet as Bird).fly !== undefined
}
if (isBird(pet)) {
  pet.fly()
} else {
  pet.swim()
}

/**
 * null checks
 */

class C2 {
  a: number
  b?: string
}

let c2 = new C2()
c2.a = 12
c2.a = undefined // error when --strictNullChecks enabled: type 'undefined' is not assignable to type 'number'
c2.b = 'str'
c2.b = undefined
c2.b = null // error when --strictNullChecks enabled: type 'null' is not assignable to type 'string | undefined'

// filter out null

function broken (name: string | null): string {
  function postfix (epithet: string) {
    // return name.charAt(0) + '. the' + epithet  // error when --strictNullChecks enabled: Object 'name' is possibly 'null'
    return name!.charAt(0) + '. the' + epithet  // use '!' after 'name' to filter out 'null'
  }

  name = name || 'Bill'
  return postfix(name)
}

broken(null)

/**
 * literals type
 */

type Easing = 'ease-in-out' | 'ease-in' | 'ease-out'

class UElement {
  animate (dx: number, dy: number, easing: Easing) {
    switch (easing) {
      case 'ease-in':
        // ...
        break
      case 'ease-out':
        // ...
        break
      case 'ease-in-out':
        // ...
        break
    }
  }
}

let button = new UElement()
button.animate(0, 0, 'ease-in')
// button.animate(0, 0, 'fade-in') // error, type 'fade-in' is not assignable to type 'Easing'
