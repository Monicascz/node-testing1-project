const { Car } = require('./index')
const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(input)
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})
///////////////////////////////////////////////////////////////////////////////////////////////////
describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(input).toBe(actual)
  })
})
///////////////////////////////////////////////////////////////////////////////////////////////////
describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const input1 = [{ integer: 4 }, { integer: 5 }, { integer: 6 }]
    const input2 = [{ integer: 9 }, { integer: 8 }, { integer: 8 }]
    const actual = utils.findLargestInteger(input)
    const actual1 = utils.findLargestInteger(input1)
    const actual2 = utils.findLargestInteger(input2)
    expect(actual).toBe(3)
    expect(actual1).toBe(6)
    expect(actual2).toBe(9)
  })
})
///////////////////////////////////////////////////////////////////////////////////////////////////
describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toBe(0)
  })
})












///////////////////////////////////////////////////////////////////////////////////////////////////
describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {

  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {

  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {

  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {

  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {

  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {

  })
})
///////////////////////////////////////////////////////////////////////////////////////////////////
describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus).toHaveProperty("odometer", 0)
    focus.drive(100)
    expect(focus.odometer).toBe(100)
  })
  test('[16] driving the car uses gas', () => {
    expect(focus).toHaveProperty("tank", 20)
    focus.drive(30)
    expect(focus.tank).toBeLessThan(20)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    //focus.refuel(19)
    focus.drive(1)
  })
  test.todo('[18] adding fuel to a full tank has no effect', () => {

  })
})
///////////////////////////////////////////////////////////////////////////////////////////////////
describe('[Exercise 7] isEvenNumberAsync', () => {
  test.todo('[19] resolves true if passed an even number')
  test.todo('[20] resolves false if passed an odd number')
  test.todo('[21] rejects an error with the message "number must be a number" if passed a non-number type')
  test.todo('[22] rejects an error with the message "number must be a number" if passed NaN')
})
