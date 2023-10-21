import { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import itemColors from "./itemColors";
import "./fluidItemsPopUp.css";

export default function App() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? itemColors : [], {
    ref: transApi,
    trail: 400 / itemColors.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className="cp-shop-items-wrapper">
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className="cp-shop-items-container"
        onClick={() => set((open) => !open)}
      >
        {transition((style, item) => (
          <animated.div
            className="cp-shop-items"
            style={{ ...style, background: item.css }}
          />
        ))}
      </animated.div>
    </div>
  );
}
