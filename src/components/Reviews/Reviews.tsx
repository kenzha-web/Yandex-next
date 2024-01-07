import {Review} from "@/components/Reviews/Review/Review";


export const Reviews = ({reviews}: any) => {
	return (
		<div>
			{
				reviews.length > 0 && reviews.map((review: any) => (
					<Review
						key={review.id}
						author={review.author}
						text={review.text}
						rating={review.rating} />
				))
			}
		</div>
	)
}