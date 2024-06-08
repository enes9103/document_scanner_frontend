import { useCallback } from 'react';
import { motion } from 'framer-motion';

export default function useBatchScanningAnimation() {
  return useCallback((duration: number) => {
    const ScannedDocumentAnimation = () => (
      <motion.img
        initial={{ x: '-50%', y: '100%', scaleX: 0.9 }}
        animate={{ y: 0 }}
        transition={{ duration, delay: duration + 0.2 }}
        src="/img/batch-scanning-document.png"
        className="absolute -bottom-6 left-1/2 w-10/12 scale-x-90 lg:w-auto"
      />
    );

    const ScannedDocumentAnimation2 = () => (
      <motion.img
        src="/img/batch-scanning-document.png"
        initial={{ x: '-50%', y: '100%', scaleX: 0.95 }}
        animate={{ y: 20 }}
        transition={{ duration, delay: duration + 0.6 }}
        className="absolute -bottom-6 left-1/2 w-10/12 scale-x-90 lg:w-auto"
      />
    );

    const ScannedDocumentAnimation3 = () => (
      <motion.img
        initial={{ x: '-50%', y: '100%' }}
        animate={{ y: 40 }}
        transition={{ duration, delay: duration + 1 }}
        className="absolute -bottom-6 left-1/2 w-10/12 lg:w-auto"
        src="/img/batch-scanning-document.png"
      />
    );

    return (
      <>
        <ScannedDocumentAnimation />
        <ScannedDocumentAnimation2 />
        <ScannedDocumentAnimation3 />
      </>
    );
  }, []);
}
