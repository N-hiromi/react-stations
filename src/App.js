// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/terrier-norwich/n02094258_2380.jpg")
  return (
    <div>
      <header>ヘッダーですよ</header>
      <div>
        <h2>Dogアプリ</h2>
        <p>犬の画像を表示するサイトです</p>
        <img src= {dogUrl} alt="犬の写真は外部サイトDogAPIを利用"></img>
        <button onClick={() => setDogUrl("https://images.dog.ceo/breeds/whippet/n02091134_12759.jpg")}>更新</button>
      </div>
    </div>
    
  )
}
