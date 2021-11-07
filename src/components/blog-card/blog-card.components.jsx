
import './blog-card.styles.css';

export const BlogCard = (props) => (
    <div className="blog-card">
        <div className="thumbnail">

        </div>
        <h1>{props.name}</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tortor ullamcorper ridiculus blandit lectus. 
        </p>
    </div>
);