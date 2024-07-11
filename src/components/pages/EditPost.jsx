import React , {useEffect, useState} from 'react'
import  {Container} from '../index'
import {PostForm} from '../index'
import service from '../../appwrite/config';
import { useNavigate, useParams} from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            service.getPosts(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])

  return (
     post ? (<div className='py-8'>
        <Container>
            <PostForm post={post}></PostForm>
        </Container>
     </div>) : null
  )
}

export default EditPost