// DO NOT DELETE

import * as React from 'react'
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
	//dog名リスト保持
	const [breeds, setBreeds] = React.useState("affenpinscher");
	//dog名リストを表示したセレクトボックスのうち、選択されたドッグ名を保持
	const [selectedBreed, setSelectedBreed] = React.useState(breeds);
	//dog画像リスト保持
	// const [dogImageList, setDogImageList] = React.useState([]);
	React.useEffect( () => {
		(async() => {
			const res = await fetch("https://dog.ceo/api/breeds/list/all");
			const json = await res.json();
			const list = await Object.keys(json.message);
			setBreeds(list);
		})()
	}, [])
	// const getImageList = async () => {
	// 	const res = await fetch("https://dog.ceo/api/breed/" + selectedBreed + "/images");
	// 	const json = await res.json();
	// 	const imageList = json.message;
	// 	//取得件数を12件に制限。13件目から削除して格納する
	// 	const regImageList = imageList.filter((img, index) => {
	// 		return index < 12;
	// 	}) 
	// 	setDogImageList(regImageList);
	// }
	// const dogList = dogImageList.map((src, index) => {
	// 	return <li key={ index }><img src={ src } alt={ index } /></li>
	// })

	return (
		<div>
			<BreedsSelect breeds={ breeds } setSelectedBreed={ setSelectedBreed }/>
			{/* <button onClick={ getImageList }>表示</button> */}
			{/* <ul>
				{ dogList }
			</ul> */}
		</div>
	)
}
