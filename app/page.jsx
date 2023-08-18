'use client'

import { useState } from 'react';

export default function Page() {
  const [marker, setMarker] = useState('X');
  const [values, setValues] = useState(['', '', '', '', '', '', '', '', '']);

  const checkIsWon = (v) => {
    console.log('Checking is won...');

    for (let i = 0; i < v.length;) {
      const first = v[i];
      const second = v[i + 1];
      const third = v[i + 2];

      console.log({ i, first, second, third });

      // Todo: Update chekcing for win conditions.

      if ((first !== '') && ((first === second) && (second === third))) {
        console.log(`${first} wins`);
        return first;
      }
      i = i + 3;
    }
  };

  const onCellClick = (i) => {
    if (values[i] !== '') return;

    const newValues = [...values];
    newValues[i] = marker;
    setValues(newValues);
    setMarker((marker === 'X') ? 'O' : 'X');
    checkIsWon(newValues);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='w-[600px] h-[600px] bg-slate-400 flex flex-col'>
        <div className='flex flex-1 bg-slate-500'>
          <div className='flex-1' onClick={() => onCellClick(0)}>{values[0]}</div>
          <div className='flex-1 bg-slate-400' onClick={() => onCellClick(1)}>{values[1]}</div>
          <div className='flex-1' onClick={() => onCellClick(2)}>{values[2]}</div>
        </div>
        <div className='flex flex-1'>
          <div className='flex-1 bg-slate-400' onClick={() => onCellClick(3)}>{values[3]}</div>
          <div className='flex-1 bg-slate-500' onClick={() => onCellClick(4)}>{values[4]}</div>
          <div className='flex-1 bg-slate-400' onClick={() => onCellClick(5)}>{values[5]}</div>
        </div>
        <div className='flex flex-1 bg-slate-500'>
          <div className='flex-1' onClick={() => onCellClick(6)}>{values[6]}</div>
          <div className='flex-1 bg-slate-400' onClick={() => onCellClick(7)}>{values[7]}</div>
          <div className='flex-1' onClick={() => onCellClick(8)}>{values[8]}</div>
        </div>
      </div>
    </main>
  )
}
