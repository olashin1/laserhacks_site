/**
 * This is an animation for the buttons, just enclose a
 * button component in this animation to animate it
 */

import { motion } from "framer-motion";

export default function EnterAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", bounce: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
}
