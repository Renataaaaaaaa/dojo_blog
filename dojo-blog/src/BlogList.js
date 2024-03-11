
const BlogList = ({blogs, title, handleDelete}) => {
    return ( 
        <div className="BlogList">
            <h1>title</h1>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>name: {blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <button onClick={() => (handleDelete(blog.id))}>delete</button>
                </div>
            ))}
        </div>

    );
}
 
export default BlogList;