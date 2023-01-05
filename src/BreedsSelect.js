// DO NOT DELETE

import * as React from 'react'

export const BreedsSelect = (props) => {
	const items = [];
	for (let i in props.breeds){
		items.push(<option key={ i } value={ props.breeds[i] }>{ props.breeds[i] }</option>)
	}

	const changeBreedsState = (e) => {
		props.setSelectedBreed(e.currentTarget.value);
	}
	
	return (
		<select id="breedsList" onChange={ changeBreedsState }>{ items }</select>
	)
}