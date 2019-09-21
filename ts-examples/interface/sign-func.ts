// function signature

interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc = (source: string, subString: string): boolean => {
  let result = source.search(subString)
  return result > -1
}
