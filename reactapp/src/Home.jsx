import React, {useEffect, useState} from 'react'
import Pagination from "./components/pagination";
import Posts from  "./components/posts";

const Home = () => {
    const [state, setState] = useState({
        posts: [],
      });
    
      const [currentPage, setCurrentPage] = useState(1);
      const [recordsPerPage] = useState(10);
    
      useEffect(() => {
        fetchData()
      }, [])
    
      const fetchData = () =>  {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url).then(response => response.json())
        .then(json => setState({
          posts: json
        }))        
      }   
    
      const indexOfLastRecord = currentPage * recordsPerPage;
      const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
      const currentRecords = state.posts.slice(indexOfFirstRecord, indexOfLastRecord);
      const nPages = Math.ceil(state.posts.length / recordsPerPage)
      
  return (
    <div>
        <div className="jumbotron">
          <h1 className="display-4">Blog posts</h1>
        </div>
        
        <Posts 
          data = {currentRecords}
        />

        <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />        
    </div>
  )
}

export default Home