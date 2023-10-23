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
import ageImg from "../assets/icons/age.png";

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
  // age below
  const [age, setAge] = useState(12);

  const handleDrag = (e) => {
    control.start(e);
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

          {/* codePal view area for 
          'go for a walk' mouse click event */}
          <div className="cp-viewing-area-center"></div>

          {/* meters and stats display area */}
          <div className="cp-viewing-area-right">
            <FluidPanel stat={emotional} srcIcon={eHImg} />
            <FluidPanel stat={physical} srcIcon={pHImg} />
            {/* <FluidPanel stat={-1} srcIcon={ageImg} txt={age} /> */}
          </div>
        </div>

        {/* codePal area */}
        <div className="cp-dashboard-footer">
          <MyCodePal />
        </div>
      </div>
    </main>
  );
}

export default ViewCodePal;
