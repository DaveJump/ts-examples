// optional params

function buildName (firstName: string, lastName?: string): string {
  return lastName ? firstName + lastName : firstName
}

function buildName2 (firstName: string, ...restOfName: string[]): string {
  return firstName + restOfName[0]
}
