import React,{useState} from "react";
import './nav.css';
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function Nav(props){
const [open,setOpen] = useState(false);
const [txt,setTxt] = useState("");
// let params = "";
const burgerClick = ()=>{
   if(open){

    setOpen(false);
   }
   else{
    setOpen(true);
   }
    }
    const search = ()=>{

    }
   const handleChange = (e)=>{
       setTxt(e.target.value);
       console.log(txt);
   }
return (<nav>
        <label className="logo">{props.title}</label>
        <div className="burger" onClick={burgerClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            </div>
        <ul className={open?"move ul":"ul"} >
            <li><a href='/' className="anc">Home</a></li>
            <li><a href="/About" className="anc">About</a></li>
            <li><input type="text" name="" id="" placeholder="Enter Keywords" onChange={handleChange} value={txt}/></li>
            <li><button className="nav-btn"
            type="submit" onClick={search}><Link to="/News"><i className="fa fa-search"></i></Link></button></li>
        </ul>
        
    </nav>
);
}
export default Nav;