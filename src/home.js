import { Link } from "react-router-dom";
import './index.css'



const Home = ()=>{
    return (
      <>
        <h1>HELLO HOME</h1>
        <Link to="/about" className="btn">
          ABOUT
        </Link>
      </>
    );
}

export default Home;