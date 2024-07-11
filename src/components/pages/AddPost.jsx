import React from 'react'
import { Container} from '../index'
import {PostForm} from '../index'
function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm></PostForm>
        </Container>
    </div>
  )
}

export default AddPost