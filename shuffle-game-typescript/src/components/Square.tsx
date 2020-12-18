import React from 'react';

const style: { [key: string]: string } = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
};

type SquareProps = {
  key: number;
  value: number | '';
  onClick(): void;
};

const Square: React.FC<SquareProps> = ({ key, value, onClick }) => {
  return (
    <button key={key} style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
