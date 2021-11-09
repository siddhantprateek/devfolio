
import './blog-list.styles.css';
import { BlogCard } from '../blog-card/blog-card.components';
import Blogs from './blogs.json';

export const BlogList = () => (
    <div className="blog-list-div">
        <div className="blog-list">
            {Blogs.map( blog => 
            <BlogCard 
                key={blog.id}
                title={blog.title}
                details={blog.details}
                url={blog.url}
                thumbnail={blog.thumbnail}
            />)}
        </div>
        <div className="btn-div">
            <a href="https://siddhantprateek.space/" target="__blank">
                <button className="More-btn">LEARN MORE.</button>
            </a>
        </div>
    </div>
);