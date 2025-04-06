import { useDispatch, useSelector } from "react-redux";
import { AppDispatch,RootState} from "../redux/store";
import { increment, decrement,incrementByAmount } from "../redux/counterSlice";

const Counter= ()=>{
    const count = useSelector((state: RootState)=>state.conter.count);

    const dispatch: AppDispatch = useDispatch();

    return(
        <div>
            <h2>Saygac {count}</h2>
            <button onClick={()=> dispatch(increment())}>Artir</button>
            <button onClick={()=> dispatch(decrement())}>Azalt</button>
            <button onClick={()=> dispatch(incrementByAmount(5))}>5 Eded Artir</button>


        </div>
    )
}
export default Counter;