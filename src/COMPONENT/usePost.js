import axios from 'axios'
import {useEffect,useState} from 'react'

export default function usePost(pageNumber){
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)
    const [posts,setPosts]=useState([])
    const [hasMore,setHasMore]=useState(false)

  useEffect(()=>{
    setLoading(true)
    setError(false)

    axios({
        method:'GET',
        url:'https://api.instantwebtools.net/v1/passenger',
        params:{page:pageNumber,size:10}
    }).then(
        res=>{
            setPosts(prevPosts=>{
                return [...new Set([...prevPosts,...res.data.data.map(b=>[b.name,b.airline.name,b.airline.logo])])]
            })

            setHasMore(res.data.data.length>0)
            setLoading(false)
        }
    ).catch(
        setError(true)
    )
  },[pageNumber])
    return {loading,error,posts,hasMore}
}