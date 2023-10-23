import "./actionicons.css";
import { AnimatePresence, motion, useDragControls } from "framer-motion";

function ActionIcons(props) {
  // draggable within the dragArea
  console.log(props);
  const dragArea = {
    top: 450,
    bottom: 600,
    left: 0,
    right: 1200,
  };
  const control = useDragControls();
  return (
    <>
      <motion.img
        className="cp-action-icons"
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
        src={props.iconSrc}
        onDragStart={null} // (event, {info.point.x info.point.y}) trigger codepal image change
        onDragEnd={null} // (event, info) trigger codepal image change
      />
    </>
  );
}
export default ActionIcons;
