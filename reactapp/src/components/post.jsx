

import React from 'react'


const Post = ({data}) => {
    return (
        <section className="ds">
            <div className="ss">
                <h1>{data.title}</h1>
                <p>{data.body}</p>
                <h4>Comments:</h4>
            </div> 
        </section>
    )    
}
export default Post;