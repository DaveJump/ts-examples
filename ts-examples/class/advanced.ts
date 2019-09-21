// modify static property

class Greeter2 {
  static standardGreeting: string = 'Hello, there'
  private greeting: string

  constructor (message?: string) {
    this.greeting = message
  }

  greet () {
    if (this.greeting) {
      return `Hello, ${this.greeting}`
    } else {
      return Greeter2.standardGreeting
    }
  }
}

let greeter2: Greeter2
greeter2 = new Greeter2()
console.log(greeter2.greet())

let Greeter3: typeof Greeter2 = Greeter2
Greeter3.standardGreeting = 'Hi, there'
let greeter3: Greeter2 = new Greeter3()
console.log(greeter3.greet())
