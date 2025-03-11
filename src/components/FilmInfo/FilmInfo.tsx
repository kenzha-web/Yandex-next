import {Fragment, FunctionComponent} from 'react';
import styles from './styles.module.css'
import classnames from 'classnames'

interface Props {
	title: string;
	genre: string;
	seasonsCount: number;
}

export const FilmInfo: FunctionComponent<Props> = ({title, genre, seasonsCount}) => {
	
	return (
		<Fragment>
			<p className={classnames(styles.title)}>{title || "Unknown Film"}</p>
			{Boolean(genre) &&  <p>{genre}</p>}
			<p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : "Нету"}</p>
		</Fragment>
	);
};