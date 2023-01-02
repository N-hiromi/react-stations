// DO NOT DELETE

import * as React from 'react'

export const DogListContainer = (props) => {
	const [breeds, setBreeds] = React.useState();
	React.useEffect(() => {
		const getDogList = async () => {
			const res = await fetch("https://dog.ceo/api/breeds/list/all");
			const json = await res.json();
			const list = await Object.keys(json.message);
			console.log(list);
			setBreeds(list);
			
			//listを繰り返して表示
			// const roop = () => {
			// 	const items = [];
			// 	for (let i = 0; i < list[i]; i++){
			// 		items.push(<li>{ list[i] }</li>)
			// 	}
			// 	return <ul>{ items }</ul>
			// }
		}
		getDogList();
		

	}, [])
	return (
			<p>{ breeds }</p>
	)
}
