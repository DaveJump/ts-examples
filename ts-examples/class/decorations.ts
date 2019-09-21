/**
 * class decorations
 */

  // private、protected、readonly

  class Human {
    protected constructor (readonly name: string) {
      this.name = name
    }
  }

  class Employee extends Human {
    private department: string

    constructor (name: string, department: string) {
      super(name)
      this.department = department
    }

    getSelfIntroduction () {
      return `Hello, my name is ${this.name} and I work in ${this.department}`
    }
  }

  let howard = new Employee('Howard', 'Sales')
  // let john = new Human('John') // error, the constructor of class 'Human' is protected.
  // howard.name = 'Dave' // error, cannot assign to 'name' because it is a read-only property
