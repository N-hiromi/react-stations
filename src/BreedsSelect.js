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
		props.setSelectedBreed(e.target.value);
	}

	return (
		<select value={"affenpinscher"} id="breedsList" onChange={ onChange } >{ items }</select>
	)
}