// import { useSpring, animated } from "@react-spring/web";
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import {
  useTime,
  useTransform,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

import "./cp.css";

export default function CodePal(props) {
  console.log("(cp) cp requested to move to ", props.moveToX);

  // for controlling behaviour
  // at diff loctions
  // useTransform(
  //  value,
  //  input,
  //  output,
  //  options)
  // const cpExpression = useTransform(x, [-100, 0, 100, 200], [0, 1, 1, 0]);
  const myCP = useRef();
  const myCPMotion = useMotionValue(0);
  const [move, setMove] = useState(false);
  const [xPosition, setXPostion] = useState(props.moveToX);

  // for displaying diff expressions
  // try
  // const cPVariants = {
  //   playGreeting: { opacity: 1 },
  //   playUpset: { opacity: 1.6 },
  //   playTired: { opacity: 1.2 },
  // };

  const handleClick = (e) => {
    console.log("(cp) CP clicked...roll-over");
  };

  // return <animated.div className="cp-codePal"></animated.div>;
  return (
    <motion.div
      onClick={handleClick}
      // variants={cPVariants}
      className="cp-codePal"
      ref={myCP}
      animate={{
        x: 100,
      }}
    />
  );
}
