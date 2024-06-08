import { useCallback } from 'react';
import { motion } from 'framer-motion';

export default function useExportShareAnimation() {
  return useCallback((duration: number) => {
    const ArrowAnimation = () => (
      <motion.img
        initial={{ y: '200%' }}
        animate={{ y: '0' }}
        transition={{ duration: duration - 0.1, delay: duration + 0.5 }}
        className="absolute -left-12 bottom-6"
        src="/img/export-share-arrow.png"
      />
    );

    const PdfAnimation = () => (
      <motion.img
        initial={{ y: '200%', x: '-50%' }}
        animate={{ y: '0' }}
        transition={{ duration: duration - 0.2, delay: duration + 0.7 }}
        className="absolute bottom-12 left-6 w-24 lg:w-auto"
        src="/img/export-share-pdf.png"
      />
    );

    const JpgAnimation = () => (
      <motion.img
        initial={{ y: '200%', x: '-50%' }}
        animate={{ y: '0' }}
        transition={{ duration: duration - 0.2, delay: duration + 1 }}
        className="absolute bottom-20 left-1/2 w-20 lg:w-auto"
        src="/img/export-share-jpg.png"
      />
    );

    const TxtAnimation = () => (
      <motion.img
        initial={{ y: '200%', x: '50%' }}
        animate={{ y: '0' }}
        transition={{ duration: duration - 0.2, delay: duration + 1.3 }}
        className="absolute bottom-12 right-6 w-24 lg:w-auto"
        src="/img/export-share-txt.png"
      />
    );

    return (
      <div className="absolute inset-0">
        <ArrowAnimation />
        <PdfAnimation />
        <JpgAnimation />
        <TxtAnimation />
      </div>
    );
  }, []);
}
