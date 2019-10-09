import React from 'react'
import Card from './Card';

interface CardsProps {
	count: number;
	repos: object[]
}

const Cards = ({ count, repos }: CardsProps) => {
	const createCards = (count: number, repos: object[]) => {
		const cards: any[] = [];
		for (let i = 0; i < count; i++) {
			cards.push(
				<div className="column">
					<Card repo={repos[i]}/>
				</div>
			)
		}
		return cards;
	}
	return (
		<section className="section">
			<div className="container has-text-centered">
				<h3 className="subtitle is-3">My recent projects</h3>
				<div className="columns">
					{repos && createCards(count, repos)}
				</div>
			</div>
		</section>
	)
}

export default Cards
