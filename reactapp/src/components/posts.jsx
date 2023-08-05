import React from 'react'
import {Link} from 'react-router-dom'


const Posts = ({data}) => {

    return (
        data.map((post, index) => (
            <div className="card" key={index}>
                <div className="card-header">
                    #{post.id} {post.title}
                </div>
                <div className="card-body">
                    <p className="card-text">{post.body}</p>                    
                    <Link
                    className="btn btn-primary text-white font-weight-bold"
                    to={`/detail/${post.id}`}
                    > Read More
                    </Link>
                </div>
            </div>
        ))
    )    
}
export default Posts;