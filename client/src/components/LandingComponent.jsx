import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../UI/Modal";
import "./landingComponent.css";

function LandingComponent({ user, handleInput }) {
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch Modal
      </motion.button>
      <AnimatePresence
        initial={false}
        // mode="wait"
        onExitComplete={() => null}
      ></AnimatePresence>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          text="sending this as text"
        />
      )}
    </div>
  );
}
export default LandingComponent;
