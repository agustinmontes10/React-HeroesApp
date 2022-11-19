import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
  return (
    <div className='container mt-5'>
        <h1 className='animate__animated animate__fadeInLeft'>DCScreen</h1>
        <hr/>

        <HeroList publisher={'DC Comics'}/>
    </div>
  )
}
