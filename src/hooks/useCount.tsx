"use client"

import {useCallback, useState} from "react";

export const useCount = (initialValue: number = 0) => {
	let [count, setCount] = useState(initialValue);
	
	const decrement = useCallback(() => {
		setCount((currentCount) => currentCount - 1)
	}, []);
	const increment = useCallback(() => {
		setCount((currentCount) => currentCount + 1)
	}, [])
	
	return {count, decrement, increment}
}