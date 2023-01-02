// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {Header} from 'src/Header'
import {Description} from 'src/Description'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  

  return (
    <div>
      <Header title={'ヘッダーですよ'}></Header>
      <Description />
    </div>
  )
}
