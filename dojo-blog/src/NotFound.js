import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h2>Sorry</h2>
            <p>The page is not found</p>
            <Link to="/">Back to home page</Link>
        </div>
     );
}
 
export default NotFound;