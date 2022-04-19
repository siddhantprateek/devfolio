import React from "react";
import "./experience.styles.css";
// import CountUp from 'react-countup';
const NoData = () => {
  return (
    <div className="nodata">
      <p>No Data Added</p>
    </div>
  );
};
class Experience extends React.Component {
  render() {
    return (
      <div className="exp">
        <div className="exp-div">
          <h1 className="exp-head-back">Places Where I have worked...</h1>
          <h1 className="exp-head-front">Experiences</h1>
        </div>
        <NoData />
        <div className="exp-div">
          <h1 className="exp-head-back">Hackathons</h1>
          <h1 className="exp-head-front">Hackathons</h1>
        </div>
        <NoData />
        <div className="exp-div">
          <h1 className="exp-head-back">Worked with</h1>
          <h1 className="exp-head-front">Communities</h1>
        </div>
        <NoData />
      </div>
    );
  }
}

export default Experience;
