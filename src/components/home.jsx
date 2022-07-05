import React from "react";
import { Link } from "react-router-dom";

function Home(props){
    return (<div className="Home">
        <h1>Welcome to News Ape</h1>
        <h4>News Ape is a web application which shows the latest news and also provides there sources and where can you read more about the article and also provide sources so that you can check  weather the news is fake or misleading  </h4>
        <button className="btn"><Link to="/News" className="HomeA">Get News</Link></button>
    </div>
    );
}
export default Home;