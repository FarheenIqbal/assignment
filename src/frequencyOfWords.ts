type WordObject = { [key: string]: number }
export function frequency(words: WordObject) {
  let freq: WordObject
  for (let i = 0; i < words.length; i++) {
    if (typeof freq[words[i]] === 'undefined') {
      freq[words[i]] = 1
    } else {
      freq[words[i]]++
    }
  }
  return freq
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
