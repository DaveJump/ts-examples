// generic base usage

function identity<T> (arg: T): T {
  return arg
}

console.log(identity<string>('string'))

function loggingIndentity<T> (arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

console.log(loggingIndentity<number>([4]))
