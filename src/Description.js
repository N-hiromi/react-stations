import * as React from 'react'
import {DogImage} from '~/DogImage'

export const Description = (props) => {
	const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/terrier-norwich/n02094258_2380.jpg");

  const click = async() => {
    //fetchでレスポンスを格納
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await res.json();
    const url = await json.message;
    setDogUrl(url);
  }

	return (
		<div className="wrapper">
			<h2>Dogアプリ</h2>
			<div>
				<p>犬の画像を表示するサイトです</p>
				<div className="dog-image">
					<DogImage url={dogUrl}></DogImage>
					<button onClick={ () => click() }>更新</button>
				</div>
			</div>
		</div>
	);
}