import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        <div className="BlogList">
            <h1>title</h1>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <Link to= {`/blogs/${blog.id}`}>
                        <h2>name: {blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                    {/* <button onClick={() => (handleDelete(blog.id))}>delete</button> */}
                </div>
            ))}
        </div>

    );
}
 
export default BlogList;