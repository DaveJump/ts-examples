let notSure: any = 4
notSure = 'maybe a string instead'
notSure = true

// let len: number = (<string>notSure).length
let len: number = (notSure as string).length
