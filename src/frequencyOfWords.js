function frequency(words) {
  const freq = {}
  for (let i = 0; i < words.length; i++) {
    if (typeof freq[words[i]] === 'undefined') {
      freq[words[i]] = 1
    } else {
      freq[words[i]]++
    }
  }
  return freq
}

function getWords(inputString) {
  const wordsArr = []
  let word = ''

  for (let i = 0; i < inputString.length; i++) {
    word = getWord(inputString, i)
    if (word.length > 0) {
      wordsArr.push(word)
      i += word.length
    }
  }
  return wordsArr
}

function getWord(inputString, pos) {
  let word = ''
  for (let i = pos; i < inputString.length; i++) {
    if (!isSeparator(inputString[i])) {
      word += inputString[i]
    } else {
      break
    }
  }
  return word
}

function isSeparator(char) {
  return (
    char === ' ' ||
    char === '\t' ||
    char === '\n' ||
    char === '.' ||
    char === ','
  )
}

const x =
  "Its a dancing house. In this house, there's a granny, a sleeping granny"

console.log(frequency(getWords(x)))

// output :
// {
//   Its: 1,
//   a: 3,
//   dancing: 1,
//   house: 2,
//   In: 1,
//   this: 1,
//   "there's": 1,
//   granny: 2,
//   sleeping: 1
// }
