// abstract class and property

abstract class Department {
  name: string

  constructor (name: string) {
    this.name = name
  }

  printName (): void {
    console.log(`Department name ${this.name}`)
  }

  // only define the signature not to implement
  // abstract method may only be implemented by derived class and instance
  abstract printMeeting (): void
}

class AccountingDepartment extends Department {
  constructor () {
    super('Accounting ad Auditing')
  }

  printMeeting (): void {
    console.log('The Accounting Deparment meets each Monday at 10am')
  }

  generateReports (): void {
    console.log('Generating accounting reports...')
  }
}

let department: Department
// department = new Department() // error, can not create instance of abstract class
department = new AccountingDepartment()
department.printName()
department.printMeeting()
