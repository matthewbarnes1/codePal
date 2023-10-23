import { useState } from "react";
// get styling
import "./viewComponent.css";
// get codePal pet
import MyCodePal from "./CP";
// get all icons on view screen
import foodImg from "../assets/toys/food.png";
import ballImg from "../assets/toys/toy_ball.png";
import boneImg from "../assets/toys/toy_bone.png";
import eHImg from "../assets/icons/dog_eH.png";
import pHImg from "../assets/icons/dog_pH.png";

// get all the UI elements needed
import ActionIcons from "../UI/ActionIcons";
import FluidPanel from "../UI/FluidPanel";

function ViewCodePal() {
  // REPLACE:
  // starting values need to come
  // from the database - integrate here
  // pet.eH below
  const [emotional, setEmotional] = useState(8);
  // pet.pH below
  const [physical, setPhysical] = useState(5);

  const handleDrag = (e) => {
    control.start(e);
  };

  const handleClick = function (e) {
    alert(e.target);
  };

  return (
    <main>
      <div className="cp-dashboard">
        {/* pet title display */}
        <div className="cp-dashboard-title">{"BRUNO"} </div>

        {/* game play area */}
        <div className="cp-viewing-area" onPointerDown={handleDrag}>
          {/* action icons area */}
          <div className="cp-fluid-panel">
            <ActionIcons iconSrc={foodImg} />
            <ActionIcons iconSrc={boneImg} />
            <ActionIcons iconSrc={ballImg} />
          </div>

          {/* codePal play area */}
          <div className="cp-viewing-area-center">
            <div className="cp-viewing-area-codePal">
              <MyCodePal />
            </div>
          </div>

          {/* meters and stats display area */}
          <div className="cp-viewing-area-right">
            <FluidPanel stat={emotional} srcIcon={eHImg} />
            <FluidPanel stat={physical} srcIcon={pHImg} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ViewCodePal;
