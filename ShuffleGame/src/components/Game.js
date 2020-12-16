import React, { useState } from 'react';
import Board from './Board';
import { shuffle } from '../helper';

const Game = ({ rowSize, colSize }) => {
  const createBoard = () => {
    const arr = [];
    for (let i = 0; i < rowSize * colSize - 1; i++) {
      arr.push(i + 1);
    }
    arr.push('');
    return arr;
  };
  const [board, setBoard] = useState(shuffle(createBoard()));

  const [spacePosition, setSpacePosition] = useState(board.indexOf(''));
  const [moves, setMoves] = useState(0);

  const clickablePositions = (spacePosition) => {
    const arr = [];
    const a = getAbove(spacePosition);
    const b = getBelow(spacePosition);
    const c = getLeft(spacePosition);
    const d = getRight(spacePosition);
    if (a !== null) arr.push(a);
    if (b !== null) arr.push(b);
    if (c !== null) arr.push(c);
    if (d !== null) arr.push(d);
    return arr;
  };

  const topBorder = () => {
    const arr = [];
    let x = 0;
    while (x < rowSize) {
      arr.push(x);
      x++;
    }
    return arr;
  };

  const bottomBorder = () => {
    const arr = [];
    let x = (rowSize - 1) * colSize;
    while (x < rowSize * colSize) {
      arr.push(x);
      x++;
    }
    return arr;
  };

  const leftBorder = () => {
    const arr = [];
    let x = 0;
    while (x < rowSize * colSize) {
      arr.push(x);
      x += colSize;
    }
    return arr;
  };
  const rightBorder = () => {
    const arr = [];
    let x = colSize - 1;
    while (x < rowSize * colSize) {
      arr.push(x);
      x += colSize;
    }
    return arr;
  };

  const getAbove = (spacePosition) => {
    if (topBorder().indexOf(spacePosition) < 0) return spacePosition - colSize;
    return null;
  };

  const getBelow = (spacePosition) => {
    if (bottomBorder().indexOf(spacePosition) < 0)
      return spacePosition + colSize;
    return null;
  };
  const getLeft = (spacePosition) => {
    if (leftBorder().indexOf(spacePosition) < 0) return spacePosition - 1;
    return null;
  };

  const getRight = (spacePosition) => {
    if (rightBorder().indexOf(spacePosition) < 0) return spacePosition + 1;
    return null;
  };
  const style = {
    fontSize: '25px',
    width: '250px',
    fontWeight: '800',
    margin: '20px auto',
  };

  const handleClick = (value, i) => {
    setMoves(moves + 1);
    const boardCopy = [...board];
    if (clickablePositions(spacePosition).indexOf(i) < 0) return;
    boardCopy[spacePosition] = value;
    boardCopy[i] = '';
    setSpacePosition(i);
    setBoard(boardCopy);
  };
  const isWon = () => {
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i] !== i + 1) return false;
    }
    return true;
  };
  const restartGame = () => {
    const copy = shuffle(createBoard());
    setBoard(copy);
    setSpacePosition(copy.indexOf(''));
    setMoves(0);
  };
  return (
    <>
      <Board
        squares={board}
        rowSize={rowSize}
        colSize={colSize}
        onClick={handleClick}
      />
      <div style={style}>
        <p style={style}>{isWon() ? 'You Won' : 'Number of Moves:' + moves} </p>
        <button style={style} onClick={restartGame}>
          Start Game
        </button>
      </div>
    </>
  );
};

export default Game;
