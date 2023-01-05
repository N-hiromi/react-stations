// DO NOT DELETE

import * as React from 'react'
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
	const [breeds, setBreeds] = React.useState("");
	const [selectedBreed, setSelectedBreed] = React.useState(breeds);
	React.useEffect( () => {
		(async() => {
			const res = await fetch("https://dog.ceo/api/breeds/list/all");
			const json = await res.json();
			const list = await Object.keys(json.message);
			setBreeds(list);
		})()
	}, [])
	console.log(selectedBreed);
	// React.useEffect( () => {
	// 	const select = document.querySelector('select');
	// 	console.log("selectはなに？");
	// 	console.log(select);
	// 	const changeBreedsState = (e) => {
	// 		console.log(e);
	// 		// console.log(e.currentTarget.value);
	// 		// setSelectedBreed(e.currentTarget.value);
	// 	}
	// 	select.addEventListener('change', changeBreedsState());
	// }, [selectedBreed])
	
	

	return (
		<div>
			<BreedsSelect breeds={ breeds } setSelectedBreed={ setSelectedBreed }/>
			{ selectedBreed }
		</div>
		
	)
}
