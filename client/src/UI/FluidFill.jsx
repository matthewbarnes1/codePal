import { useState } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";

// import styles from "./styles.module.css";

export default function FluidFill() {
  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const props = useSpring({ width: open ? width : 0 });

  return (
    <div className="cp-buy-fluid-container">
      <div
        ref={ref}
        className="cp-buy-fluid-main"
        onClick={() => toggle(!open)}
      >
        <animated.div className="cp-buy-fluid-fill" style={props} />
        <animated.div className="cp-buy-fluid-content">
          {props.width.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
}
