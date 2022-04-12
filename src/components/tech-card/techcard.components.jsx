import "./techcard.styles.css";
const TechCard = ({ tech, url }) => {
  return (
    <div className="tech-box">
      <div className="tech-card-content">
        <div className="tech-img-container">
          <img src={url} alt="" />
        </div>
        <p>{tech}</p>
      </div>
    </div>
  );
};

export default TechCard;
