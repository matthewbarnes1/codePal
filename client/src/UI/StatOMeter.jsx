import like from "../assets/icons/like.svg";
import unlike from "../assets/icons/unlike.svg";

import "./statOMeter.css";

function StatOMeter(props) {
  let likes = [{}];
  for (let i = 0; i < props.stats; i++) {
    likes.push({ key: i, value: like });
  }
  let unlikes = [{}];
  for (let i = 0; i < 10 - props.stats; i++) {
    unlikes.push({ key: 20 - i, value: unlike });
  }
  return (
    <div className="cp-stats-container">
      <div className="cp-stats-meter">
        {likes.map((like) => (
          <img key={like.key} src={like.value}></img>
        ))}
        {unlikes.map((unlike) => (
          <img key={unlike.key} src={unlike.value}></img>
        ))}
      </div>
      {props.txt ? (
        <div className="cp-stats-container">
          <div className="cp-stats-info-text">{props.txt}</div>
          <div className="cp-stats-icon">
            <img src={props.srcIcon} />
          </div>
        </div>
      ) : (
        <div className="cp-stats-icon">
          <img src={props.srcIcon} />
        </div>
      )}
    </div>
  );
}
export default StatOMeter;
