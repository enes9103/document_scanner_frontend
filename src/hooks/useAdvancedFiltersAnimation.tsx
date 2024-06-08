import { useCallback } from 'react';
import { motion } from 'framer-motion';

export default function useAdvancedFiltersAnimation() {
  return useCallback((duration: number) => {
    const LeftFilterAnimation = () => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay: duration + 0.2 }}
      >
        <img
          src="/img/advanced-filters-left.png"
          className="absolute -left-5 bottom-4 w-7 lg:-left-9 lg:w-auto"
        />
      </motion.div>
    );

    const RightFilterAnimation = () => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay: duration + 0.5 }}
      >
        <img
          src="/img/advanced-filters-right.png"
          className="absolute -right-5 bottom-4 w-7 lg:-right-9 lg:w-auto"
        />
      </motion.div>
    );

    return (
      <>
        <LeftFilterAnimation />
        <RightFilterAnimation />
      </>
    );
  }, []);
}
