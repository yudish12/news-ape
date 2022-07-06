import React from "react";
import News from "./News";
// import Spinner from 'react-bootstrap/Spinner';
import Pagination from "./pagination";
import ClipLoader from "react-spinners/ClipLoader";

function NewsData(props){
    const [page,setPage] = React.useState(1);
    const [newsPerPage] = React.useState(10);
    const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=b1eb4c4a15934003a65165ade75465c7"
    let [chunk,setChunk] = React.useState(null);
    React.useEffect(()=>{
    fetch(url).then((Data)=>{
        Data.json().then(res=>{
            console.log(res);
            setChunk(res.articles);
        })
    }).catch((err)=>{
        console.log(err);
    })
    },[url])
    console.log(chunk);
    let indexOfLastNews = page*newsPerPage;
    let indexOfFirstNews = indexOfLastNews - newsPerPage;
     if(chunk){
        const paginate = (pageNumber)=>{
            setPage(pageNumber);
        }
        let currNews = chunk.slice(indexOfFirstNews,indexOfLastNews);
    console.log(currNews);
         return (
            <>
           <News currNews={currNews}/>
           <Pagination postsPerPage={page} totalPosts={newsPerPage} paginate={paginate}/>
           </>
        )
     }
     else{
        return <div className="spinner">  
            <ClipLoader color={"#266FC7"} className="spinner" size={150} />
        </div>
     } 
}
export default NewsData;