import React,{ useState,useEffect }from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';

export default function Bonus() {
  const dispatch=useDispatch()
  const amount = useSelector(state => state.account.account); // Adjusted to match the state structure
  const points = useSelector(state => state.bonus.points); // Adjusted to match the state structure
  const [localAmount, setlocalAmount] = useState(amount);
  const [localPoint,setlocalPoint] = useState(points);
    // Ensure local state updates if Redux state changes
    useEffect(() => {
      setlocalAmount(amount);
    }, [amount]);
  
    useEffect(() => {
      setlocalPoint(points);
    }, [points]);
  return (
    <div>
      <div className=' p-5 flex flex-col items-center justify-center bg-zinc-300'>
            <div>Current Amount :${amount}</div>
            <div>Total Bonus : ${points}</div>
            <button onClick={()=>{dispatch(increment())}} className='bg-black rounded-xl text-white p-1'>Increment</button>
        </div>
    </div>
  )
}
