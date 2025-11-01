import React, { useEffect, useState } from 'react'
import axios from 'axios';

type IPost = {
  id: string
  title: string
  body: string
  userId: string
}
const GetList = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    // Get Data useEffect Hook
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{setPosts(res.data)})
      .catch((error)=>{
        console.error("Error Fetching Data" , error);
      })
    },[])

  return (
    <ul>
       {posts.map(post => (
        <li key={post?.id}>{post?.title}</li>
      ))}
    </ul>
  )
}

export default GetList;