import React from 'react';
import Square from './Square';

const Board = ({ squares, rowSize, colSize, onClick }) => {
  const str = 'repeat(' + rowSize + ',1fr)/repeat(' + colSize + ',1fr)';
  const style = {
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
