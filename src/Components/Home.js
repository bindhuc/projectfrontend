import React from 'react'
import Images from './Images'
import LatestArticles from './LatestArticles'
import Thelatest from './Thelatest'
import LatestStories from './LatestStories'

const Home = () => {
  return (
    <div>
        <Images />
        <Thelatest/>
        <LatestArticles/>
        <LatestStories/>
    </div>
  )
}

export default Home