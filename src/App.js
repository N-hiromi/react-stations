// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {Header} from 'src/Header'
import {Description} from 'src/Description'
import App from '../src/App'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <Header title={'ヘッダーですよ'} />
      <Description />
    </div>
  )
}
