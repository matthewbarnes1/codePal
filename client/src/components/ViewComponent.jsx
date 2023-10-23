import React, { useRef, useState, useEffect } from "react";
// import { animated } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";
import { AnimatePresence, motion, useDragControls } from "framer-motion";

import "./viewComponent.css";
import MyCodePal from "./CP";
import foodImg from "../assets/toys/food.png";
import FluidPanel from "../UI/FluidPanel";

function ViewCodePal() {
  const [emotional, setEmotional] = useState(8);
  const [physical, setPhysical] = useState(5);

  const control = useDragControls();

  const dragArea = {
    top: 450,
    bottom: 600,
    left: 0,
    right: 1200,
  };
  const handleDrag = (e) => {
    control.start(e);
  };
  const handleClick = function (e) {
    alert(e.target);
  };

  return (
    <main>
      <div className="cp-dashboard">
        <div className="cp-dashboard-title">{"BRUNO"} </div>

        {/* <div className="cp-fluid-panel">
          <HealthStats stats={emotional} />
          <HealthStats stats={physical} />
        </div> */}

        <div className="cp-viewing-area" onPointerDown={handleDrag}>
          <motion.img
            className="cp-viewing-area-left"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            // onClick={null}
            whileDrag={{ scale: 2.2 }}
            drag={true}
            dragControls={control}
            dragElastic={1}
            dragConstraints={{
              top: dragArea.top,
              left: dragArea.left,
              right: dragArea.right,
              bottom: dragArea.bottom,
            }}
            dragMomentum={true}
            dragTransition={{ bounceStiffness: 60, bounceDamping: 10 }}
            src={foodImg}
            onDragStart={null} // (event, {info.point.x info.point.y}) trigger codepal image change
            onDragEnd={null} // (event, info) trigger codepal image change
          />
          <div className="cp-viewing-area-center">
            <div className="cp-viewing-area-codePal">
              <MyCodePal />

              {/* <div className="cp-codePal"> </div> */}
              {/* </animated.div> */}
            </div>
          </div>
          <FluidPanel emotional={emotional} physical={physical} />
        </div>
      </div>
    </main>
  );
}

export default ViewCodePal;
