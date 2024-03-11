import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [blogTitle, setBlogTitle] = useState("");
    const [blogBody, setBlogBody] = useState("");
    const [blogAuthor, setBlogAuthor] = useState("");
    const [isPending, setIsPending ] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title: blogTitle, body: blogBody, author: blogAuthor};  //interesting
        setIsPending(true);
        fetch("http://localhost:4000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            history.push("/");
        })
        

    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                {/* <label></label> */}
                <div>input the title:</div> 
                <input type="text" required value={blogTitle} onChange={(e) => (setBlogTitle(e.target.value))}/>
                <div>input the body:</div>
                <textarea required value={blogBody} onChange={(e) => (setBlogBody(e.target.value))}>
                    
                </textarea>
                <select value={blogAuthor} onChange={(e) => (setBlogAuthor(e.target.value))}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>add blog</button>}
                {isPending && <button disabled>submitting</button>}
            </form>
            <h2>{blogTitle}</h2>
            <h2>{blogAuthor}</h2>
            <p>{blogBody}</p>
        </div>

     );
}
 
//div和label的区别
//json是怎么自动把id当作唯一id的
//history ???
export default Create;