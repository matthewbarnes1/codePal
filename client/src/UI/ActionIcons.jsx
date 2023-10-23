import { useEffect, useState } from "react";
import "./actionicons.css";
import { AnimatePresence, motion } from "framer-motion";

function ActionIcons(props) {
  const [iconInPlay, setIconInPlay] = useState(false);
  // draggable within the dragArea
  // console.log(props);
  const dragArea = {
    top: 450,
    bottom: 600,
    left: 0,
    right: 1200,
  };

  useEffect(() => {
    console.log("effect triggered...");
  }, [iconInPlay]);

  return (
    <>
      <motion.img
        className={
          iconInPlay ? "cp-action-icons-in-play" : "cp-action-icons-at-rest"
        }
        whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.8 }}
        onClick={null}
        whileDrag={{ scale: 2.2 }}
        drag={true}
        dragControls={null}
        dragElastic={1}
        dragConstraints={{
          top: dragArea.top,
          left: dragArea.left,
          right: dragArea.right,
          bottom: dragArea.bottom,
        }}
        dragMomentum={true}
        dragTransition={{ bounceStiffness: 60, bounceDamping: 10 }}
        src={props.iconSrc}
        onDragStart={() => setIconInPlay(true)} // (event, {info.point.x info.point.y}) trigger codepal image change
        onDragEnd={null} // (event, info) trigger codepal image change
      />
    </>
  );
}
export default ActionIcons;
