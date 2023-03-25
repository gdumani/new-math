import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [state] = useState({
    total: 0,
  });
  const { total } = state;
  const disp = `${total}`;
  const buttons = [
    { lbl: 'AC' },
    { lbl: '+/-' },
    { lbl: '%' },
    { lbl: '÷', cl: 'colored' },
    { lbl: '7' },
    { lbl: '8' },
    { lbl: '9' },
    { lbl: 'x', cl: 'colored' },
    { lbl: '4' },
    { lbl: '5' },
    { lbl: '6' },
    { lbl: '-', cl: 'colored' },
    { lbl: '1' },
    { lbl: '2' },
    { lbl: '3' },
    { lbl: '+', cl: 'colored' },
    { lbl: '0', cl: 'double' },
    { lbl: ',' },
    { lbl: '=', cl: 'colored' },
  ];

  return (
    <div className="calc">
      <span>{disp}</span>
      {buttons.map((btn, i) => {
        const k = i;
        const { lbl, cl } = btn;
        return (
          <Button key={k} lbl={lbl} cl={cl} />);
      })}
    </div>
  );
};

export default Calculator;
