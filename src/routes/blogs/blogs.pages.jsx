
import React from 'react';
import BlogList from '../../components/blogs-list/blog-list.component';
import './blogs.styles.css';
class Blogs extends React.Component{
    render(){
        return(
            <div className="blogs">
                <div className='blogs-div'>
                    <h1 className='blog-head-back'>Things I wrote...</h1>
                    <h1 className='blog-head-front'>Blogs</h1>
                </div>
                <BlogList/>
            </div>
        )
    }
}

export default Blogs;