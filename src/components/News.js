import React from 'react'
import NewsCard from './NewsCard'
const News = (props) => {
  return (
    props.currNews.map((e)=>{
        return <NewsCard urlToImage={e.urlToImage} title={e.title} author={e.author} source={e.source.name} description={e.description} url={e.url}/>
     })
  )
}

export default News
