import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "./healthStats.css";
function HealthStats() {
  return (
    <div className="cp-health-stats-container">
      <img src={FcLike}></img>
      <div>This is a test</div>
      <div>{FcLikePlaceholder}</div>
    </div>
  );
}

export default HealthStats;
