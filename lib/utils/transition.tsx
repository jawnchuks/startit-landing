import { motion } from "framer-motion";


interface SectionProps {
  children: React.ReactNode;
}

export const TransitionElement: React.FC<SectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -3, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export const TransitionStart: React.FC<SectionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className=""
      style={{ gap: "0rem" }}
    >
      {children}
    </motion.div>
  );
};