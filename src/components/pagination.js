import React from 'react'

const Pagination = (props) => {
    const pageNumber = [];
    for(let i=1;i<=10;i++){
        pageNumber.push(i);
    }
    console.log(pageNumber);
  return (
    <div>
     <ul className="pagination">
  <li></li>
  {pageNumber.map((e)=>{
    return(<li className="active">
   <button  onClick={()=>{
        props.paginate(e);
    }}>{e}</button> 
    </li>)
  })}
  
  <li></li>
</ul>
    </div>
  )
}

export default Pagination;
