import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import Post from './components/post'
import React from 'react'

const SinglePost = () => {
  
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/' + path
    )
    await response.json().then((finish) => {
      setData(finish)
      console.log(finish)
    })
  }


  return <Post data={data} />;
}

export default SinglePost