function error (message: string): never {
  throw new Error(message)
}

error('something wrong')

function infiniteLoop (): never {
  while (true) {
    // do something
  }
}
