import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament, decreament, reset, increamentByAmount } from './counterSlice'
import { useState } from "react";

const Counter = () => {

	const count = useSelector((state) => state.counter.count)
	const dispatch = useDispatch()

	const [increamentAmount, setIncreamentAmount] = useState(0)

	const addValue = Number(increamentAmount) || 0

	const resetAll = () => {
		setIncreamentAmount(0)
		dispatch(reset())
	}

	return (
		<section>
			<p>
				{count}
			</p>
			<div>
				<button onClick={() => dispatch(increament())}>+</button>
				<button onClick={() => dispatch(reset())}>Reset</button>
				<button onClick={() => dispatch(decreament())}>-</button>
			</div>
			<input type="text" name="" id="" value={increamentAmount} onChange={(e) => setIncreamentAmount(e.target.value)} />
			<div>
				<button onClick={() => dispatch(increamentByAmount(addValue))}>Add By Amount</button>
				<button onClick={() => dispatch(resetAll(addValue))}>resetAll</button>

			</div>

		</section >
	)
}

export default Counter