// generic interface and type param

function _identity<T> (arg: T): T {
  return arg
}

interface GenericIndentity<T> {
  (arg: T): T
}

let myId: GenericIndentity<number> = _identity
