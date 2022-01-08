import "./techcard.styles.css";
const TechCard = ({ tech, url }) => {
  return (
    <div className="tech-box">
      <div className="tech-card-content">
        <img src={url} alt="" />
        <p>{tech}</p>
      </div>
    </div>
  );
};

export default TechCard;
