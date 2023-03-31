import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import '../style/calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next, operation } = state;
  const disp = `${total || ''}${operation || ''}${next || ''}`;
  const buttons = [
    { lbl: 'AC', cl: 'none' },
    { lbl: '+/-', cl: 'none' },
    { lbl: '%', cl: 'none' },
    { lbl: '÷', cl: 'colored' },
    { lbl: '7', cl: 'none' },
    { lbl: '8', cl: 'none' },
    { lbl: '9', cl: 'none' },
    { lbl: 'x', cl: 'colored' },
    { lbl: '4', cl: 'none' },
    { lbl: '5', cl: 'none' },
    { lbl: '6', cl: 'none' },
    { lbl: '-', cl: 'colored' },
    { lbl: '1', cl: 'none' },
    { lbl: '2', cl: 'none' },
    { lbl: '3', cl: 'none' },
    { lbl: '+', cl: 'colored' },
    { lbl: '0', cl: 'double' },
    { lbl: '.', cl: 'none' },
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
