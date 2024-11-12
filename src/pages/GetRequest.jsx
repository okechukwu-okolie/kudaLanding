
import { useEffect, useState } from 'react'



import React from 'react'

const GetRequest = () => {

    const [blogPost, setBlogPost]=useState([]);
    const [display,setDisplay]=useState(true);

    useEffect(()=>{
        
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then((data)=>{
        setBlogPost(data);
        setDisplay(false);
    })
        .catch((error)=>{
            console.error('Fetching post error',error);
            setDisplay(false)
        })
},[])



  return (
    <div>
        <div>
            {display ? (
            <div>
                <img 
                src="https://i.gifer.com/4V0b.gif" 
                alt="Retrieving posts........." 
                style={{width:'600px',height:'600px',marginLeft:'300px',marginBottom:'700px'}}
                />
                <p>Waiting...................</p>
            </div>
            ):(
            <div>
                <h2>Blog Post</h2>
                <ul>{blogPost.map((blog)=>(
                    <li key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </li>
                ))}</ul>
            </div>)}
              </div>
    </div>
  )
}

export default GetRequest
