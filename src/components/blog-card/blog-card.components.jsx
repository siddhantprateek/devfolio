
import './blog-card.styles.css';

export const BlogCard = (props) => (
    
        <a className="link" href={props.url} target="__blank">
            <div className="blog-card">
                <div className="blog-thumbnail">
                    <img src={props.thumbnail} height="180px" width="100%"alt="" />
                </div>
                    <h3 className='title'>{props.title}</h3>
                <p className="blog-details">
                    {props.details}
                </p>
            </div>
        </a>
);