import StatOMeter from "./StatOMeter";

import "./fluidPanel.css";

function FluidPanel(props) {
  return (
    <div className="cp-fluid-panel">
      {props.stat + 1 ? (
        <StatOMeter stats={props.stat} srcIcon={props.srcIcon} />
      ) : (
        <StatOMeter
          // stats={props.stat}
          srcIcon={props.srcIcon}
          txt={props.txt}
        />
      )}
    </div>
  );
}
export default FluidPanel;
