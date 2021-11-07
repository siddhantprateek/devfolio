
import './blog-list.styles.css';
import { BlogCard } from '../blog-card/blog-card.components';
export const BlogList = () => (
    <div className="blog-list-div">
        <div className="blog-list">
            <BlogCard name='Blog 1'/>
            <BlogCard name='Blog 2'/>
            <BlogCard name='Blog 3'/>
            <BlogCard name='Blog 4'/>
        </div>
        <div className="btn-div">
            <a href="https://siddhantprateek.space/" target="__blank">
                <button className="More-btn">LEARN MORE.</button>
            </a>
        </div>
    </div>
);