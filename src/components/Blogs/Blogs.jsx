import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ( {handleBtnCard}) => {
    const [blogs ,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json ())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className="w-[70%]">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
            
            {
                blogs.map(blog =><Blog key={blog.id} blog={blog}  handleBtnCard={ handleBtnCard}></Blog>)
            }
        </div> 
        </div>
    );
};
Blogs.propTypes={
    handleBtnCard:PropTypes.func.isRequired
}

export default Blogs;