import { useEffect, useState, useRef } from "react";
import "./actionicons.css";
import { AnimatePresence, motion, useTime } from "framer-motion";

function ActionIcons(props) {
  const [iconInPlay, setIconInPlay] = useState(false);

  const actionIcon = useRef();

  // draggable within the dragArea
  // console.log(props);
  const dragArea = {
    top: 450,
    bottom: 600,
    left: 0,
    right: 1200,
  };

  const transitionValues = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
  };

  useEffect(() => {
    console.log("effect triggered...");
  }, [iconInPlay]);

  const handleIconInPlay = (e, info) => {
    setIconInPlay(true);
    console.log("icon picked up...", info.point.x);

    // get codePal to follow
  };

  const handleIconDrop = (e, info) => {
    console.log("(cp) Action Icon dropped...", info.point.x);
    props.func(info)
      ? console.log("(cp) CP moved...")
      : console.log("(cp) CP could not move...");
  };

  return (
    <>
      <motion.img
        ref={actionIcon}
        className={
          iconInPlay ? "cp-action-icons-in-play" : "cp-action-icons-at-rest"
        }
        whileHover={{ scale: 1.1 }}
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
        onDragStart={handleIconInPlay} // (event, {info.point.x info.point.y}) trigger codepal image change
        onDragEnd={handleIconDrop} // (event, info) trigger codepal image change
      />
    </>
  );
}
export default ActionIcons;
