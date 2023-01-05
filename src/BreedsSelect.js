// DO NOT DELETE

import * as React from 'react'

export const BreedsSelect = (props) => {
	//selectタグの生成、更新
	const items = [];
	for (let i in props.breeds){
		items.push(<option key={ i } value={ props.breeds[i] }>{ props.breeds[i] }</option>)
	}
	//selectが変更したら発火
	const onChange = (e) => {
		console.log("change");
		console.log(document.getElementById("breedsList").value);
		console.log(e.target.value);
		// document.getElementById("breedsList").value = e.target.value;
		props.setSelectedBreed(e.target.value);
	}

	return (
		<select defaultValue="affenpinscher" id="breedsList" onChange={ onChange } >{ items }</select>
	)
}