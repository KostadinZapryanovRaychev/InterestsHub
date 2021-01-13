import { Button } from 'react-bootstrap';

import React, { useState } from 'react';
import { Container } from '@material-ui/core';


export default function Like(props)
{
    const [likeCount, setLikeCount] = useState(0); 

    const handleLike = () => setLikeCount(likeCount + 1);
    const handleDislike = () => {
        if(likeCount > 0)
            setLikeCount(likeCount - 1)

        
    }

  return (
      <Container>
        <div  style={{float:'left'}}> <Button >{likeCount}</Button></div>
        <Button  style={{marginLeft:'10px'}} onClick={handleLike}>Like</Button>
        <Button style={{marginLeft:'10px'}} onClick={handleDislike} >Dislike</Button>
         
      </Container>
 
  )
};