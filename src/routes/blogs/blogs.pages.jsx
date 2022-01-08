
import React from 'react';
import BlogList from '../../components/blogs-list/blog-list.component';
class Blogs extends React.Component{
    render(){
        return(
            <div className="blogs">
                <BlogList/>
            </div>
        )
    }
}

export default Blogs;