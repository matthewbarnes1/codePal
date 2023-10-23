import StatOMeter from "./StatOMeter";

import "./fluidPanel.css";

function FluidPanel(props) {
  return (
    <div className="cp-fluid-panel">
      {props.stat + 1 ? (
        <StatOMeter stats={props.stat} srcIcon={props.srcIcon} />
      ) : null}
    </div>
  );
}
export default FluidPanel;
