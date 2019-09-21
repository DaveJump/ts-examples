// class getter and setter

class Users {
  private _fullname: string
  private _passcode: string

  constructor (fullname: string, passcode: string) {
    this._fullname = fullname
    this._passcode = passcode
  }

  get fullname (): string {
    return this._fullname
  }
  set fullname (str: string) {
    let [newName, passCode] = str.split('#')
    if (this.auth(passCode)) {
      this._fullname = newName
    } else {
      console.log('Error, user unauthorized.')
    }
  }

  private auth (passcode: string): boolean {
    return passcode === this._passcode
  }
}

let dave = new Users('Dave', '1234')
console.log(dave.fullname)
dave.fullname = 'Tom#1234'
console.log(dave.fullname)
