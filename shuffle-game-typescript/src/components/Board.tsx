import React from 'react';
import Square from './Square';

type BoardProps = {
  squares: (number | '')[];
  rowSize: number;
  colSize: number;
  onClick(square: number | string, i: number): void;
};

const Board: React.FC<BoardProps> = ({
  squares,
  rowSize,
  colSize,
  onClick,
}) => {
  const str: string = 'repeat(' + rowSize + ',1fr)/repeat(' + colSize + ',1fr)';
  const style: { [key: string]: string } = {
    border: '4px solid darkblue',
    width: '250px',
    height: '200px',
    margin: '20px auto',
    display: 'grid',
    gridTemplate: str,
  };
  return (
    <div style={style}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(square, i)} />
      ))}
    </div>
  );
};

export default Board;
