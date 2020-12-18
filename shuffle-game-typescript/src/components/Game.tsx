import React, { useState } from 'react';
import Board from './Board';
import { shuffle } from './helper';
//import produce from 'immer';

type GameProps = {
  rowSize: number;
  colSize: number;
};

type SquareValue = number | ''; //because '' is used in array
type NumberOrNull = number | null;

const Game: React.FC<GameProps> = ({ rowSize, colSize }) => {
  const createBoard = (): SquareValue[] => {
    const arr: SquareValue[] = [];
    for (let i = 0; i < rowSize * colSize - 1; i++) {
      arr.push(i + 1);
    }
    arr.push('');
    return arr;
  };

  const [board, setBoard] = useState<SquareValue[]>(shuffle(createBoard()));
  const [spacePosition, setSpacePosition] = useState<number>(board.indexOf(''));
  const [moves, setMoves] = useState<number>(0);

  const clickablePositions = (spacePosition: number): number[] => {
    const arr: number[] = [];
    const a: NumberOrNull = getAbove(spacePosition);
    const b: NumberOrNull = getBelow(spacePosition);
    const c: NumberOrNull = getLeft(spacePosition);
    const d: NumberOrNull = getRight(spacePosition);
    if (a !== null) arr.push(a);
    if (b !== null) arr.push(b);
    if (c !== null) arr.push(c);
    if (d !== null) arr.push(d);
    return arr;
  };

  const topBorder = (): number[] => {
    const arr = [];
    let x = 0;
    while (x < rowSize) {
      arr.push(x);
      x++;
    }
    return arr;
  };

  const bottomBorder = (): number[] => {
    const arr = [];
    let x = (rowSize - 1) * colSize;
    while (x < rowSize * colSize) {
      arr.push(x);
      x++;
    }
    return arr;
  };

  const leftBorder = (): number[] => {
    const arr = [];
    let x = 0;
    while (x < rowSize * colSize) {
      arr.push(x);
      x += colSize;
    }
    return arr;
  };

  const rightBorder = (): number[] => {
    const arr = [];
    let x = colSize - 1;
    while (x < rowSize * colSize) {
      arr.push(x);
      x += colSize;
    }
    return arr;
  };

  const getAbove = (spacePosition: number): NumberOrNull => {
    if (topBorder().indexOf(spacePosition) < 0) return spacePosition - colSize;
    return null;
  };

  const getBelow = (spacePosition: number): NumberOrNull => {
    if (bottomBorder().indexOf(spacePosition) < 0)
      return spacePosition + colSize;
    return null;
  };

  const getLeft = (spacePosition: number): NumberOrNull => {
    if (leftBorder().indexOf(spacePosition) < 0) return spacePosition - 1;
    return null;
  };

  const getRight = (spacePosition: number): NumberOrNull => {
    if (rightBorder().indexOf(spacePosition) < 0) return spacePosition + 1;
    return null;
  };

  const style: { [key: string]: string } = {
    fontSize: '25px',
    width: '250px',
    fontWeight: '800',
    margin: '20px auto',
  };

  const handleClick = (value: SquareValue, i: number): void => {
    setMoves(moves + 1);
    const boardCopy: SquareValue[] = [...board];
    if (clickablePositions(spacePosition).indexOf(i) < 0) return;
    boardCopy[spacePosition] = value;
    boardCopy[i] = '';
    setSpacePosition(i);
    setBoard(boardCopy);
  };
  const isWon = (): boolean => {
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i] !== i + 1) return false;
    }
    return true;
  };

  const restartGame = (): void => {
    const copy: SquareValue[] = shuffle(createBoard());
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
