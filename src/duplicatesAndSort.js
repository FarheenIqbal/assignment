export function sort(words) {
  let key, i, j
  for (i = 1; i < words.length; i++) {
    key = words[i]
    for (j = i - 1; j >= 0 && key < words[j]; j--) {
      words[j + 1] = words[j]
    }
    words[j + 1] = key
  }
  return words
}

export function removeDuplicates(arr) {
  const result = []
  if (!arr) {
    return []
  }
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

export function getWords(inputString) {
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

export const str1 =
  "Its a dancing house. In this house, \t \n \n there's a granny,\n\n\n a dancing granny,  \n on that granny there's a kid,  \na sleeping kid"

export const str2 = ' E B A B D A C D E C B A D'
