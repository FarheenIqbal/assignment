window.onload = init

function init() {
  const fireButton = document.getElementById('fireButton')
  fireButton.onclick = handleFireButton

  const guessInput = document.getElementById('guessInput')
  guessInput.onkeypress = handleKeyPress

  model.generateShipLocations()
}

function handleFireButton() {
  const guessInput = document.getElementById('guessInput')
  const guess = guessInput.value.toUpperCase()
  controller.processGuess(guess)
  guessInput.value = ''
}

function handleKeyPress(e) {
  const fireButton = document.getElementById('fireButton')

  if (e.keyCode === 13) {
    fireButton.click()
    return false
  }
}
function displayMessage(msg) {
  const msgDiv = document.getElementById('msg')
  msgDiv.innerHTML = msg
}

function displayHit(location) {
  const cell = document.getElementById(location)
  cell.setAttribute('class', 'hit')
}

function displayMiss(location) {
  const cell = document.getElementById(location)
  cell.setAttribute('class', 'miss')
}

const model = {
  boardSize: 7,
  numShips: 3,
  shipsSunk: 0,
  shipLength: 3,

  ships: [
    { locations: ['0', '0', '0'], hits: [false, false, false] },
    { locations: ['0', '0', '0'], hits: [false, false, false] },
    { locations: ['0', '0', '0'], hits: [false, false, false] },
  ],

  fire(guess) {
    for (let i = 0; i < this.numShips; i++) {
      const index = this.ships[i].locations.indexOf(guess)
      if (index >= 0) {
        this.ships[i].hits[index] = true
        displayHit(guess)
        displayMessage('HIT!')
        if (this.isSunk(this.ships[i])) {
          displayMessage('You sank my ship!')
          this.shipsSunk++
        }
        return true
      }
    }
    displayMiss(guess)
    displayMessage('MISS!')
    return false
  },

  isSunk(ship) {
    for (let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== true) {
        return false
      }
    }
    return true
  },

  generateShipLocations() {
    let locations
    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip()
      } while (this.collision(locations))
      this.ships[i].locations = locations
    }
  },

  generateShip() {
    const direction = Math.floor(Math.random() * 2)
    let row, col

    if (direction === 1) {
      // horizontal
      row = Math.floor(Math.random() * this.boardSize)
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1))
    } else {
      // vertical
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1))
      col = Math.floor(Math.random() * this.boardSize)
    }

    const newShipLocations = []
    for (let i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(`${row}${col + i}`)
      } else {
        newShipLocations.push(`${row + i}${col}`)
      }
    }
    return newShipLocations
  },

  collision(locations) {
    for (let i = 0; i < this.numShips; i++) {
      for (let j = 0; j < locations.length; j++) {
        if (this.ships[i].locations.indexOf(locations[j]) >= 0) {
          return true
        }
      }
    }
    return false
  },
}

const controller = {
  guesses: 0,

  processGuess(guess) {
    const location = parseGuess(guess)
    if (location) {
      this.guesses++
      if (model.fire(location) && model.shipsSunk === model.numShips) {
        displayMessage(
          `You sank all my battleships, in ${this.guesses} guesses`
        )
      }
    }
  },
}
function parseGuess(guess) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

  if (guess === undefined || guess.length !== 2) {
    alert('Oops, please enter a letter and a number on the board.')
    return undefined
  }
  const firstChar = guess.charAt(0)
  const row = alphabet.indexOf(firstChar)
  const column = guess.charAt(1)

  if (isNaN(row) || isNaN(column)) {
    alert("Oops, that isn't on the board.")
    return undefined
  }
  if (
    row < 0 ||
    row >= model.boardSize ||
    column < 0 ||
    column >= model.boardSize
  ) {
    alert("Oops, that's off the board!")
    return undefined
  }
  return row + column
}
