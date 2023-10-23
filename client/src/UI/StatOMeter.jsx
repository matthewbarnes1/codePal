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
    unlikes.push({ key: i, value: unlike });
  }
  return (
    <>
      {props.srcImg ? <img src={props.srcIcon}></img> : null}
      <div className="cp-stats-container">
        {likes.map((like) => (
          <img key={like.key} src={like.value}></img>
        ))}
        {unlikes.map((unlike) => (
          <img key={unlike.key} src={unlike.value}></img>
        ))}
      </div>
    </>
  );
}

export default StatOMeter;
