import React from 'react'
import './Card.css'

interface CardProps {
	repo: object;
}

const Card = ({ repo }: CardProps) => {
	console.log(repo)
	return (
		<div className="card">
			<div className="card-content card-fixed-height has-text-centered">
				<p className="subtitle is-4">{repo['name']}</p>
				{repo['description'] && 
				<p className="subtitle is-6">{repo['description']}</p>
				}
				<a className="button is-dark" href={repo['html_url']}>view code</a>
			</div>
		</div>
	)
}

export default Card
