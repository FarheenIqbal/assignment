import React, { useState } from 'react';
import Board from './Board';
import { shuffle } from '../helper';

const Game = () => {
  const [board, setBoard] = useState(
    shuffle(['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  );

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

  const getAbove = (spacePosition) => {
    if (
      spacePosition === 0 ||
      spacePosition === 1 ||
      spacePosition === 2 ||
      spacePosition === 3
    )
      return null;
    return spacePosition - 4;
  };

  const getBelow = (spacePosition) => {
    if (
      spacePosition === 12 ||
      spacePosition === 13 ||
      spacePosition === 14 ||
      spacePosition === 15
    )
      return null;
    return spacePosition + 4;
  };
  const getLeft = (spacePosition) => {
    if (
      spacePosition === 0 ||
      spacePosition === 4 ||
      spacePosition === 8 ||
      spacePosition === 12
    )
      return null;
    return spacePosition - 1;
  };

  const getRight = (spacePosition) => {
    if (
      spacePosition === 3 ||
      spacePosition === 7 ||
      spacePosition === 11 ||
      spacePosition === 15
    )
      return null;
    return spacePosition + 1;
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
    const copy = shuffle([
      '',
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
    ]);
    setBoard(copy);
    setSpacePosition(copy.indexOf(''));
    setMoves(0);
  };
  return (
    <>
      <Board squares={board} onClick={handleClick} />
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
