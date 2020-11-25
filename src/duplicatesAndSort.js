function sort(words) {
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

function removeDuplicates(arr) {
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
// function removeDuplicates(words) {
//   const arr = words
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (words[j] === words[i] && i !== j) {
//         words = removeElement(words, j)
//       }
//     }
//   }
//   return words
// }

// function removeElement(words, pos) {
//   for (let i = pos; i < words.length - 1; i++) {
//     words[i] = words[i + 1]
//   }
//   words.length--
//   return words
// }

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

const str1 =
  "Its a dancing house. In this house, \t \n \n there's a granny,\n\n\n a dancing granny,  \n on that granny there's a kid,  \na sleeping kid"
let words1 = getWords(str1)
console.log('Extracted words : ', words1)
words1 = removeDuplicates(words1)
console.log('After removing duplicates : ', words1)
console.log('Sorted : ', sort(words1))

const str2 = ' E B A B D A C D E C B A D'
let words2 = getWords(str2)
console.log('Extracted words : ', words2)
words2 = removeDuplicates(words2)
console.log('After removing duplicates : ', words2)
console.log('Sorted : ', sort(words2))

// output::
// Extracted words :  [
//     'Its',    'a',       'dancing',
//     'house',  'In',      'this',
//     'house',  "there's", 'a',
//     'granny', 'a',       'dancing',
//     'granny', 'on',      'that',
//     'granny', "there's", 'a',
//     'kid',   'a',       'sleeping',
//     'kid'
//   ]
//   After removing duplicates :  [
//     'Its',     'a',
//     'dancing', 'house',
//     'In',      'this',
//     "there's", 'granny',
//     'on',      'that',
//     'kid',    'sleeping'
//   ]
//   Sorted :  [
//     'In',       'Its',
//     'a',        'dancing',
//     'kid',     'granny',
//     'house',    'on',
//     'sleeping', 'that',
//     "there's",  'this'
//   ]
//   Extracted words :  [
//     'E', 'B', 'A', 'B',
//     'D', 'A', 'C', 'D',
//     'E', 'C', 'B', 'A',
//     'D'
//   ]
//   After removing duplicates :  [ 'E', 'B', 'A', 'D', 'C' ]
//   Sorted :  [ 'A', 'B', 'C', 'D', 'E' ]
