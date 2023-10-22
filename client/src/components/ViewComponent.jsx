import React, { useRef, useState, useEffect } from "react";
// import { animated } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";
import { AnimatePresence, motion, useDragControls } from "framer-motion";

import HealthStats from "../UI/HealthStats";
import "./viewComponent.css";
import MyCodePal from "./CP";
import foodImg from "../assets/toys/food.png";

function ViewCodePal() {
  const [emotional, setEmotional] = useState(5);
  const [physical, setPhysical] = useState(5);

  const control = useDragControls();

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

        <div className="text-center cp-dashboard-alert">
          <HealthStats stats={emotional} />
          <HealthStats stats={physical} />
        </div>

        <div className="cp-viewing-area" onPointerDown={handleDrag}>
          <motion.img
            className="cp-viewing-area-left"
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.8 }}
            // onClick={null}
            whileDrag={{ scale: 2.2 }}
            drag={true}
            dragControls={control}
            dragElastic={1}
            dragConstraints={{ top: 450, left: 0, right: 500, bottom: 600 }}
            dragMomentum={true}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            src={foodImg}
          />
          <div className="cp-viewing-area-center">
            <div className="cp-viewing-area-codePal">
              <MyCodePal />

              {/* <div className="cp-codePal"> </div> */}
              {/* </animated.div> */}
            </div>
          </div>
          <motion.button
            className="cp-viewing-area-right"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => handleClick(e)}
          >
            {" "}
          </motion.button>
        </div>
      </div>
    </main>
  );
}

export default ViewCodePal;
