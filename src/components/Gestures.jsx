import * as motion from "motion/react-client"

export default function Gestures({ children }) {
    return (

        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            {children}
        </motion.div>
    )
}