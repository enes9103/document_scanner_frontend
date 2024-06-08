import React, { ReactNode } from 'react';
// Framer Motion
import { motion } from 'framer-motion';
// Components
import Link, { LinkProps } from '../Base/Link';
import ContentBoxHeader from './ContentBoxHeader';
import ContentBoxImage from './ContentBoxImage';

// Props for the header section of the ContentBox component
interface ContentBoxHeaderProps {
  title: string;
  actionTitle: string;
  description: string;
}

// Props for the image section of the ContentBox component
interface ContentBoxImageProps {
  mobileImageUrl: string;
  desktopImageUrl: string;
  alt: string;
}

// Props for the ContentBox component
export interface ContentBoxProps
  extends ContentBoxHeaderProps,
    ContentBoxImageProps,
    Omit<LinkProps, 'linkTitle'> {
  linkTitle?: string;
  className?: string;
  animateAfter?: ((parentAnimationDuration: number) => ReactNode) | undefined;
  isActive: boolean;
}

const ContentBox = ({
  title,
  actionTitle,
  description,
  linkUrl,
  linkTitle = 'Learn More',
  desktopImageUrl,
  mobileImageUrl,
  alt,
  animateAfter,
  isActive,
}: ContentBoxProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`w-full grid-cols-1 place-items-center overflow-hidden lg:grid-cols-2 ${isActive ? 'grid' : 'hidden'}`}
    >
      <div className="text-center lg:order-2 lg:text-right">
        <ContentBoxHeader
          title={title}
          actionTitle={actionTitle}
          description={description}
        />
        <Link linkTitle={linkTitle} linkUrl={linkUrl} />
      </div>
      <motion.div
        className="relative"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ContentBoxImage
          alt={alt}
          desktopImageUrl={desktopImageUrl}
          mobileImageUrl={mobileImageUrl}
        />
        {animateAfter && animateAfter(0.5)}
      </motion.div>
    </motion.article>
  );
};

// Attach header, image, and action button components as properties to the ContentBox component
ContentBox.Header = ContentBoxHeader;
ContentBox.Image = ContentBoxImage;
ContentBox.ActionButton = Link;

export default ContentBox;
