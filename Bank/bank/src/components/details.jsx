import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Details() {
  const amount = useSelector(state => state.account.account); // Adjusted to match the state structure
  const points = useSelector(state => state.bonus.points); // Adjusted to match the state structure
  const [localAmount, setLocalAmount] = useState(amount);
  const [localPoints, setLocalPoints] = useState(points);

  // Ensure local state updates if Redux state changes
  useEffect(() => {
    setLocalAmount(amount);
  }, [amount]);

  useEffect(() => {
    setLocalPoints(points);
  }, [points]);

  return (
    <div>
      <div className='p-5 flex flex-col items-center justify-center bg-zinc-300'>
        <div>Current Amount: ${localAmount}</div>
        <div>Total Bonus: ${localPoints}</div>
      </div>
    </div>
  );
}
