"use client"

import React from "react";
import FilmDetails from "@/components/FilmDetails/FilmDetails";
import {filmDetailsData} from "@/components/FilmDetails/filmDetailsData";
import {Reviews} from "@/components/Reviews/Reviews";
import {NewReviewForm} from "@/components/NewReviewForm/NewReviewForm";

export default function Home() {
	return (
		<div>
			<header/>
			<FilmDetails title={filmDetailsData.title} genre={filmDetailsData.genre}
			             seasonsCount={filmDetailsData.seasonsCount}/>
			<Reviews reviews={filmDetailsData.reviews}/>
			<NewReviewForm/>
			<footer/>
		</div>
	)
}
