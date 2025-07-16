// components/FadeInOnScroll.jsx
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function FadeInOnScroll({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 40,
  scale = 1,
  rotate = 0,
  once = true,
}) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  // Calculate direction offset
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      scale: scale !== 1 ? 0.95 : 1,
      rotate: rotate,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}
