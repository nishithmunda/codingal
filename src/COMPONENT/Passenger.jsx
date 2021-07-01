import React, { useRef, useState,useCallback } from 'react'
import './Passenger.css';
import usePost from './usePost';

function Passenger() {
  const[pageNumber,setPageNumber]=useState(2)
  const{posts,hasMore,loading}=usePost(pageNumber)

  const observer=useRef()
  const lastPost=useCallback(node=>{
    if(loading) return
    if(observer.current) observer.current.disconnect()
    observer.current=new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting && hasMore){
          setPageNumber(prevPageNumber=>prevPageNumber+1)
        }
        })  
    if(node) observer.current.observe(node)
  },[loading,hasMore])


  return (
    <div className="passenger__container">
       {
          posts.map((post,index)=>{
          if(posts.length===index + 1)
           return(<>
                    <div className='passenger__details' ref={lastPost} key={index}>
                        {post[0]}
                        <img className='airline__logo' src={post[2]} alt='airline_logo'></img>
                    </div>
                  </>)
          else{
           return <div className='passenger__details' key={index}>{post[0]}<img className='airline__logo'className='airline__logo' src={post[2]} alt='airline_logo'></img></div>
          } 
        }
          )}
        <div>{loading && 'Loading.....'}</div>  
    </div>
  );
}

export default Passenger;
