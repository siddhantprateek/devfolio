import TechCard from "../tech-card/techcard.components";
import "./techlist.styles.css";
import Tech from './tech.json'
const TechList = () => {
  return (
    <div className="tech-list">
      {Tech.map((tech) => (
        <TechCard tech={tech.techname} url={tech.link} />
      ))}
    </div>
  );
};

export default TechList;