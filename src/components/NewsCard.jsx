import React from "react";

function NewsCard(props){
    return(<div className="Card">
      <img className="newsImg" src={props.urlToImage} height="300px" width="300px" alt="news img"/>
      <div className="contentContainer">
      <h1 className="title">{props.title}</h1>
      <h3 className="sub-heading">Written by {props.author} ,Source:{props.source}</h3>
      <p className="content"
      //264 characters
      >{props.description}<a href={props.url}
      rel="noreferrer" target="_blank">Read More</a></p>
      </div>
      </div>
    );
}
export default NewsCard;