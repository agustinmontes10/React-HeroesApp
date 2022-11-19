import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  return (
    <div className='container mt-5'>
        <h1 className='animate__animated animate__fadeInLeft'>MarvelScreen</h1>
        <hr/>

        <HeroList publisher={'Marvel Comics'}/>
    </div>
  )
}
