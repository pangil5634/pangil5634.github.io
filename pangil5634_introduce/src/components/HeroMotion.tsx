import { motion } from "framer-motion";

export default function HeroMotion() {
  return (
    <motion.ul
      className="hero-metrics"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <li><strong>9+</strong><span>Projects</span></li>
      <li><strong>6+</strong><span>Years Building</span></li>
      <li><strong>3+</strong><span>Domains</span></li>
    </motion.ul>
  );
}
