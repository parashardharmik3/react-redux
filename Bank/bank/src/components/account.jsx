import React,{ useState,useEffect }from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { decrementA, fetchUserById, incrementA, incrementByAmountA } from '../slices/accountSlice';
export default function Account() {
  const dispatch=useDispatch()
  const amount = useSelector(state => state.account.account); // Adjusted to match the state structure
  const points = useSelector(state => state.bonus.points); // Adjusted to match the state structure
  const [localAmount, setlocalAmount] = useState(amount);
  const [localPoint,setlocalPoint] = useState(points);
  const [value,setValue] = useState(0);
    // Ensure local state updates if Redux state changes
    useEffect(() => {
      setlocalAmount(amount);
    }, [amount]);
  
    useEffect(() => {
      setlocalPoint(points);
    }, [points]);
  return (
    <div>
      <div className='flex flex-col items-center justify-center bg-zinc-300'>
      <div>Current localAmount :${localAmount}</div>
      <div>Total Bonus : ${localPoint}</div>
      <div className='flex items-center gap-5  pb-2 justify-center'>
        <button onClick={() => {dispatch(incrementA())}} className='bg-black rounded-xl text-white p-1'>Increment</button>
        <button onClick={() => {dispatch(decrementA())}} className='bg-black rounded-xl text-white p-1' >Decrement</button>
        <input type="number" onChange={(e)=>setValue(+e.target.value)} className='rounded-xl'/>
        <button onClick={() => {dispatch(incrementByAmountA(value))}} className='bg-black rounded-xl text-white p-1'>Inc by localAmount</button>
        <button onClick={() => {dispatch(fetchUserById(2))}} className='bg-black rounded-xl text-white p-1'>Inc by Id</button>
      </div>
      </div>
    </div>
  )
}
