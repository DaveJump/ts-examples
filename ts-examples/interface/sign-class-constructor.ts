// constructor signature

interface ClockTick {
  tick ()
}

interface ClockConstructor {
  new(hour: number, minute: number): ClockTick
}

function createClock (constructor: ClockConstructor, hour: number, minute: number): ClockTick {
  return new constructor(hour, minute)
}

class DigitalClock implements ClockTick {
  constructor (h: number, m: number) {

  }

  tick () {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockTick {
  constructor (h: number, m: number) {

  }

  tick () {
    console.log('tick tick')
  }
}

let digital = createClock(DigitalClock, 12, 14)
let analog = createClock(AnalogClock, 8, 22)
