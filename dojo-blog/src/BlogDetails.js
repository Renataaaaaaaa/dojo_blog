import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, isError} = useFetch("http://localhost:4000/blogs/" + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch("http://localhost:4000/blogs/"+ blog.id, {
            method: "DELETE",
        }).then(()=>{
            // setIsPending(false);
            history.push("/");
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>is pending...</div>}
            {isError && <div>{isError}</div>}
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p> written by {blog.author} </p>
                    <div>{blog.body} </div>
                    <button onClick={()=>(handleDelete())}>delete</button>
                </article>
                )
            }
        </div>
    );
}
 
export default BlogDetails;