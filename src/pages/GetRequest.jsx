import styled from 'styled-components'
import { useEffect, useState } from 'react'
// // import React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';


import React from 'react'

const GetRequest = () => {

    const [blogPost, setBlogPost]=useState([])

    useEffect(()=>{
        //fetch data from api
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(data=>setBlogPost(data))
    // .then(data=>{console.log(data)})
    },[])



  return (
    <Container>
        <div>
            <ul>{blogPost.map((blog,index) =>{return <p key={index}>{blog.title} <br /><small>{blog.body}</small></p>})}
            </ul>
        </div>
        {/* <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open>
            <CircularProgress color="inherit" />
            </Backdrop> */}
    </Container>
  )
}

export default GetRequest
const Container = styled.div`
text-align: center;
margin-top: 50px;

ul{
    /* padding-bottom: 130px; */
    width: 80%;
    margin:0 auto;
    text-align: center;
}
small{
    color: red;
}
p{
    /* background-color: grey; */
    /* max-width: 400px; */
    margin-bottom: 50px;
    border: 1px solid black;
    padding: 20px;
    border-radius: 30px;
}
`
