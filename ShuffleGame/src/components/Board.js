import React from 'react';
import Square from './Square';

const style = {
  border: '4px solid darkblue',
  width: '250px',
  height: '200px',
  margin: '20px auto',
  display: 'grid',
  gridTemplate: 'repeat(4,1fr)/repeat(4,1fr)',
};

const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(square, i)} />
    ))}
  </div>
);

export default Board;
