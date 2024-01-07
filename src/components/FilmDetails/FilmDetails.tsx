"use client"

import {FunctionComponent, useEffect, useState} from 'react';
import {useCount} from "@/hooks/useCount";
import {FilmInfo} from "@/components/FilmInfo/FilmInfo";

interface Props {
	title: string;
	genre: string;
	seasonsCount: number;
}

export const FilmDetails: FunctionComponent<Props> = ({title, genre, seasonsCount}) => {
	let {count, increment, decrement} = useCount(0)
	useEffect(() => {
		console.log(`count`, count);
		return () => {}
	}, [count])
	return (
		<div>
			<FilmInfo title={title} genre={genre} seasonsCount={seasonsCount} />
			<div>
				<button onClick={decrement}>-</button>
				{count}
				<button onClick={increment}>+</button>
			</div>
		</div>
	);
};

export default FilmDetails;