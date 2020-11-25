import { frequency, getWords } from './frequencyOfWords'

it('frequency', () => {
  expect(
    frequency(
      getWords(
        "Its a dancing house. In this house, there's a granny, a sleeping granny"
      )
    )
  ).toStrictEqual({
    Its: 1,
    a: 3,
    dancing: 1,
    house: 2,
    In: 1,
    this: 1,
    "there's": 1,
    granny: 2,
    sleeping: 1,
  })
})
