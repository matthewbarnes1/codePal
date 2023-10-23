import like from "../assets/icons/like.svg";
import unlike from "../assets/icons/unlike.svg";

import "./healthStats.css";
import "./fluidPanel.css";

function HealthStats({ stats }) {
  console.log(stats);
  let likes = [{}];
  for (let i = 0; i < stats; i++) {
    likes.push({ key: i, value: like });
  }
  let unlikes = [{}];
  for (let i = 0; i < 10 - stats; i++) {
    unlikes.push({ key: i, value: unlike });
  }
  return (
    <div className="cp-health-stats-container">
      {likes.map((like) => (
        <img key={like.key} src={like.value}></img>
      ))}
      {unlikes.map((unlike) => (
        <img key={unlike.key} src={unlike.value}></img>
      ))}
    </div>
  );
}

export default HealthStats;
