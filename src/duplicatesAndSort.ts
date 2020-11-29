export function sort(words: string[]): string[] {
  let key: string, i: number, j: number
  for (i = 1; i < words.length; i++) {
    key = words[i]
    for (j = i - 1; j >= 0 && key < words[j]; j--) {
      words[j + 1] = words[j]
    }
    words[j + 1] = key
  }
  return words
}

export function removeDuplicates(arr: string[]): string[] {
  const result: string[] = []
  if (!arr) {
    return []
  }
  for (let i: number = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

export function getWords(inputString: string[]): string[] {
  const wordsArr: string[] = []
  let word: string = ''

  for (let i: number = 0; i < inputString.length; i++) {
    word = getWord(inputString, i)
    if (word.length > 0) {
      wordsArr.push(word)
      i += word.length
    }
  }
  return wordsArr
}

function getWord(inputString: string[], pos: number): string {
  let word: string = ''
  for (let i: number = pos; i < inputString.length; i++) {
    if (!isSeparator(inputString[i])) {
      word += inputString[i]
    } else {
      break
    }
  }
  return word
}

function isSeparator(char: string): boolean {
  return (
    char === ' ' ||
    char === '\t' ||
    char === '\n' ||
    char === '.' ||
    char === ','
  )
}
