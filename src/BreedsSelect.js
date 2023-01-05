// DO NOT DELETE

import * as React from 'react'

export const BreedsSelect = (props) => {
	//selectタグの生成、更新
	const items = [];
	for (let i in props.breeds){
		items.push(<option key={ i } value={ props.breeds[i] }>{ props.breeds[i] }</option>)
	}
	//selectが変更したら発火
	const changeBreedsState = (e) => {
		console.log(document.getElementById("breedsList").value);
		document.getElementById("breedsList").value = e.target.value;
		props.setSelectedBreed(e.target.value);
	}

	// console.log(document.getElementById("breedsList").value);
	return (
		<select id="breedsList" onChange={ changeBreedsState } >{ items }</select>
	)
}