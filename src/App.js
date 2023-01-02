// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/terrier-norwich/n02094258_2380.jpg");

  const click = async() => {
    //fetchでレスポンスを格納
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await res.json();
    const url = await json.message;
    setDogUrl(url);
  }

  return (
    <div>
      <header>ヘッダーですよ</header>
      <div className="wrapper">
        <h2>Dogアプリ</h2>
        <div>
          <p>犬の画像を表示するサイトです</p>
          <div className="dog-image">
            <img src= {dogUrl} alt="犬の写真は外部サイトDogAPIを利用"></img>
            <button onClick={ () => click() }>更新</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}
