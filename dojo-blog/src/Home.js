import BlogList from './BlogList';
import useFetch from './useFetch.js'

const Home = () => {

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => (id !== blog.id));
    //     setBlogs(newBlogs);
    // }
    const {data: blogs, isPending, isError} = useFetch("http://localhost:4000/blogs");
    return ( 
        <div className="home">
            {isError && <div> {isError} </div>}
            {blogs && < BlogList blogs={blogs} title="ALL BLOGS"/>}
            {isPending && <div>loading.....</div>}
            {/* <BlogList blogs={blogs.filter((blog) => (blog.author === 'mario'))} title="mario's BLOGS"/> */}
        </div>  
     );
}
 
export default Home;