import "./blog-list.styles.css";
import { BlogCard } from "../blog-card/blog-card.components";
import Blogs from "./blogs.json";


export default function BlogList(){
  return (
    <div>
      <div className="blog-list">
        {Blogs.map((blog) => (
          <BlogCard
            className="blg"
            key={blog.id}
            title={blog.title}
            details={blog.details}
            url={blog.url}
            thumbnail={blog.thumbnail}
          />
        ))}
      </div>
      <div className="btn-div">
        <a href="https://siddhantprateek.space/" target="__blank">
          <button className="More-btn">LEARN MORE.</button>
        </a>
      </div>
    </div>
  );
};
