import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next, operation } = state;
  const disp = `${total || ''}${operation || ''}${next || ''}`;
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
    { lbl: '.' },
    { lbl: '=', cl: 'colored' },
  ];

  const handleClick = (e) => setState(calculate(state, e.target.textContent));

  return (
    <div className="calc">
      <span>{disp}</span>
      {buttons.map((btn, i) => {
        const k = i;
        const { lbl, cl } = btn;
        return (
          <Button
            key={k}
            lbl={lbl}
            cl={cl}
            // state={state}
            // setState={setState}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Calculator;
