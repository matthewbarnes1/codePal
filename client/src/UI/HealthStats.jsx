import like from "../assets/like.svg";
import unlike from "../assets/unlike.svg";

import "./healthStats.css";

function HealthStats({ stats }) {
  console.log(stats);
  let likes = [{}];
  for (let i = 0; i < stats; i++) {
    likes.push({ key: i, value: like });
  }
  return (
    <div className="cp-health-stats-container">
      {likes.map((like) => (
        <img key={like.key} src={like.value}></img>
      ))}
    </div>
  );
}

export default HealthStats;
